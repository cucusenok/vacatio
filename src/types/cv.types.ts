import type { z } from 'zod';
import type {
	CvContactEntrySchema,
	CvEducationEntrySchema,
	CvExperienceEntrySchema,
	CvLanguageEntrySchema,
	CvRelationsSchema,
	CvSkillEntrySchema,
	CvWithRelationsSchema,
	CvWithoutRelationsSchema
} from '@/validation/cv.validation';

export type CvWithoutRelations = z.infer<typeof CvWithoutRelationsSchema>;
export type CvWithRelations = z.infer<typeof CvWithRelationsSchema>;
export type CvSkillEntry = z.infer<typeof CvSkillEntrySchema>;
export type CvExperienceEntry = z.infer<typeof CvExperienceEntrySchema>;
export type CvContactEntry = z.infer<typeof CvContactEntrySchema>;
export type CvLanguageEntry = z.infer<typeof CvLanguageEntrySchema>;
export type CvEducationEntry = z.infer<typeof CvEducationEntrySchema>;
export type CvSummary = string;
export type CvRelations = z.infer<typeof CvRelationsSchema>;
