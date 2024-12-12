import { z } from 'zod';
import { createGetSchema } from '@/helpers/zod.helpers';
import { CvRelationsPicker, CvWithoutRelationsPicker } from '@/constants/cv.constants';

export const CvGetSchema = createGetSchema(CvWithoutRelationsPicker, CvRelationsPicker);

// export const CvSummarySchema = z.object({
//   value: z.string().optional().nullable(),
// });

export const CvJobTitleSchema = z.string().min(1, { message: 'Job title is required' });

export const CvIconSchema = z.string().optional().nullable();

export const CvSkillEntrySchema = z
	.object({
		id: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		value: z.string().optional().nullable(),
		icon: CvIconSchema,
		createdAt: z.union([z.string(), z.date()]).optional().nullable(),
		updatedAt: z.union([z.string(), z.date()]).optional().nullable()
	})
	.partial();

export const CvContactEntrySchema = z
	.object({
		id: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		value: z.string().optional().nullable(),
		icon: CvIconSchema
	})
	.partial();

export const CvLanguageEntrySchema = z
	.object({
		id: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		value: z.string().optional().nullable(),
		icon: CvIconSchema
	})
	.partial();

export const CvEducationEntrySchema = z
	.object({
		id: z.string().optional().nullable(),
		title: z.string().optional().nullable(),
		place: z.string().optional().nullable(),
		period: z.string().optional().nullable(),
		image: z.string().optional().nullable()
	})
	.partial();

export const CvBulletPointSchema = z.object({
	id: z.string().optional().nullable(),
	value: z.string().optional().nullable(),
	cvExperienceId: z.string().nullable().optional()
});

export const CvExperienceEntrySchema = z.object({
	id: z.string().optional().nullable(),
	place: z.string().nullable().optional(),
	title: z.string().nullable().optional(),
	period: z.string().nullable().optional(),
	image: z.string().nullable().optional(),
	bulletPoints: z.array(CvBulletPointSchema).nullable().optional(),
	derivedFromExperienceId: z.string().nullable().optional()
});

export const CvContactRelationSchema = z.array(CvContactEntrySchema);
export const CvEducationRelationSchema = z.array(CvEducationEntrySchema);
export const CvSkillRelationSchema = z.array(CvSkillEntrySchema);
export const CvLanguageRelationSchema = z.array(CvLanguageEntrySchema);
export const CvExperienceRelationSchema = z.array(CvExperienceEntrySchema);

export const CvRelationsSchema = z
	.object({
		contacts: CvContactRelationSchema.nullable().optional(),
		educations: CvEducationRelationSchema.nullable().optional(),
		skills: CvSkillRelationSchema.nullable().optional(),
		languages: CvLanguageRelationSchema.nullable().optional(),
		experiences: CvExperienceRelationSchema.nullable().optional()
	})
	.partial();

export const CvWithoutRelationsSchema = z
	.object({
		id: z.string().optional().nullable(),
		image: z.string().optional().nullable(),
		createdAt: z.string().optional().nullable(),
		updatedAt: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		jobTitle: CvJobTitleSchema.optional().nullable(),
		designName: z.string().optional().nullable(),
		isDefault: z.boolean().optional().nullable(),
		filename: z.string().optional().nullable(),
		summary: z.string().optional().nullable(),
		coverLetter: z.string().optional().nullable(),
		publicKey: z.string().optional().nullable()
	})
	.partial();

export const CvWithRelationsSchema = CvWithoutRelationsSchema.merge(CvRelationsSchema).partial();

/**
 * tRPC routers don't support files yet.
 */
// export const CustomFileInstanceSchema = z.object({
//   name: z.string(),
//   type: z.string(),
//   size: z.number(),
//   content: z.string(), // base64
// });

// export const CvFileUploadSchema = CustomFileInstanceSchema.refine(
//   (file) => {
//     return file.size <= MAX_UPLOAD_SIZE;
//   },
//   `File size must be less than ${MAX_UPLOAD_SIZE / 1024 / 1024}MB`,
// ).refine(
//   (file) => {
//     return ACCEPTED_FILE_TYPES.includes(file.type);
//   },
//   `File must be ${ACCEPTED_FILE_TYPES.join(", ")}`,
// );
