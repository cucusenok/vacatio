import type { CvExperienceEntry, CvSkillEntry, CvSummary, CvWithRelations } from './cv.types';
import type { Vacancy } from './vacancy.types';

export type Pushable = {
	cvId: string | null;
	summary: CvSummary | null;
	skills: CvSkillEntry[] | null;
	experiences: CvExperienceEntry[] | null;
	vacancy: Vacancy | null;
	redirectTo: string | null;
	uploadedCv: CvWithRelations | null;
};
