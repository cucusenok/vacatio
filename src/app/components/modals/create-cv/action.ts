"use server";

import { z } from "zod";
import { insertCvRelations, insertCvWithoutRelations } from "@/server/dal/cv.dal";
import { getUser } from "@/server/dal/user.dal";
import { insertVacancy } from "@/server/dal/vacancy.dal";
import { ai } from "@/server/ai";
import { createCvWithRelations } from "@/helpers/cv.helpers";
import { UserRelationsPicker } from "@/constants/user.constants";
import { VACANCY_ORIGINAL_DESCRIPTION_MAX_LENGTH } from "@/constants/vacancy.constants";
import { ProcedureContext } from "@/server/procedure-context";
import { createExposer } from "@/server/ws/use-pusher.ws";

const generateCvRealTime = async (context: ProcedureContext) => {
  try {
    const { vacancy, user } = context.get("vacancy", "user");
    if (!user?.id) throw new Error("User id not found");
    if (!vacancy) throw new Error("Vacancy not found");

    const expose = createExposer(user.id, { initial: { vacancy }, redirectOnCvIdReady: true });

    const data = await Promise.all([
      insertCvWithoutRelations(context).then(expose),
      ai.gemini.generate.summary(context).then(expose),
      ai.gemini.generate.skills(context).then(expose),
      ai.gemini.generate.experiences(context).then(expose),
    ]);

    const [{ cvId }, { summary }, { skills }, { experiences }] = data;

    if (!cvId) throw new Error("CV id not returned by database.");

    context.update((prev) => {
      const updatedCv = { ...prev.cv, id: cvId, summary, skills, experiences };
      return { ...prev, cv: updatedCv };
    });
  } catch (e) {
    console.error("Error. Could not create CV. Reason:", e);
    throw e;
  }
};

export const createCv = async function () {
  const [user, vacancy] = await Promise.all([
      null,
    //getUser(ctx.user.id, { with: UserRelationsPicker }),
    ai.gemini.parse.vacancy({ originalDescription }),
  ]);

  const cv = createCvWithRelations(user, vacancy);

  const context = new ProcedureContext({
    user,
    vacancy,
    cv,
  });

  await generateCvRealTime(context);
  await Promise.all([insertCvRelations(context), insertVacancy(context)]);
}
