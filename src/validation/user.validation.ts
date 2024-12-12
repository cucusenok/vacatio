import { z } from 'zod';
import { createGetSchema } from '@/helpers/zod.helpers';
import { UserRelationsPicker, UserWithoutRelationsPicker } from '@/constants/user.constants';

export const UserGetSchema = createGetSchema(UserWithoutRelationsPicker, UserRelationsPicker);

export const IconSchema = z.string().optional().nullable();

export const UserLanguageEntrySchema = z.object({
	id: z.string().uuid().optional().nullable(),
	name: z.string().optional().nullable(),
	value: z.string().optional().nullable()
});

export const UserSkillEntrySchema = z.object({
	id: z.string().uuid().optional().nullable(),
	name: z.string().optional().nullable(),
	value: z.string().optional().nullable(),
	icon: IconSchema
});

export const UserContactEntrySchema = z.object({
	id: z.string().uuid().optional().nullable(),
	name: z.string().optional().nullable(),
	value: z.string().optional().nullable(),
	icon: IconSchema
});

export const UserEducationEntrySchema = z.object({
	id: z.string().uuid().optional().nullable(),
	place: z.string().optional().nullable(),
	period: z.string().optional().nullable(),
	image: z.string().optional().nullable(),
	title: z.string().optional().nullable()
});

export const UserBulletPointSchema = z.object({
	value: z.string().optional().nullable(),
	userExperienceId: z.string().nullable().optional()
});

export const UserExperienceEntrySchema = z.object({
	id: z.string().uuid().optional().nullable(),
	place: z.string().optional().nullable(),
	period: z.string().optional().nullable(),
	originalDescription: z.string().optional().nullable(),
	image: z.string().optional().nullable(),
	title: z.string().optional().nullable(),
	userBulletPoints: z.array(UserBulletPointSchema).optional().nullable()
});

export const UserWithoutRelationsSchema = z.object({
	id: z.string().uuid().nullable().optional(),
	name: z.string().nullable().optional(),
	jobTitle: z.string().nullable().optional(),
	summary: z.string().nullable().optional(),
	image: z.string().nullable().optional(),
	email: z.string().nullable().optional(),
	createdAt: z.string().nullable().optional(),
	updatedAt: z.string().nullable().optional()
});

export const UserContactRelationSchema = z.array(UserContactEntrySchema);
export const UserSkillRelationSchema = z.array(UserSkillEntrySchema);
export const UserLanguageRelationSchema = z.array(UserLanguageEntrySchema);
export const UserEducationRelationSchema = z.array(UserEducationEntrySchema);
export const UserExperienceRelationSchema = z.array(UserExperienceEntrySchema);

export const UserRelationsSchema = z
	.object({
		contacts: UserContactRelationSchema.nullable().optional(),
		skills: UserSkillRelationSchema.nullable().optional(),
		languages: UserLanguageRelationSchema.nullable().optional(),
		educations: UserEducationRelationSchema.nullable().optional(),
		experiences: UserExperienceRelationSchema.nullable().optional()
	})
	.partial();

export const UserWithRelationsSchema = UserWithoutRelationsSchema.merge(UserRelationsSchema).partial();
