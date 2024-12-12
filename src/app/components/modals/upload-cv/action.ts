import { z } from "zod";
import { updateUserRelations, updateUserWithoutRelations } from "@/server/dal/user.dal";
import { ai } from "@/server/ai";
import { privateRoutes } from "@/constants/routes.constants";
import { ProcedureContext } from "@/server/procedure-context";
import { createExposer } from "@/server/ws/use-pusher.ws";
import { protectedAction } from "@/trpc/server";

export const updateUserWithCvUpload = protectedAction
  .input(z.object({ file: z.instanceof(File) }))
  .mutation(async ({ ctx, input }) => {
    const expose = createExposer(ctx.user.id);
    const cv = await ai.gemini.parse.cv(input.file);

    expose({ uploadedCv: cv, redirectTo: privateRoutes.onboarding({ uploaded: true }) });

    const user = { id: ctx.user.id, ...cv };
    const context = new ProcedureContext({ user });

    await Promise.all([updateUserWithoutRelations(context), updateUserRelations(context)]);
  });
