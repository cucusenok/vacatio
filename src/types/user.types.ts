import { type Session } from 'next-auth';
import { type z } from 'zod';
import type {
	UserContactEntrySchema,
	UserExperienceEntrySchema,
	UserGetSchema,
	UserLanguageEntrySchema,
	UserRelationsSchema,
	UserSkillEntrySchema,
	UserWithRelationsSchema,
	UserWithoutRelationsSchema
} from '@/validation/user.validation';

export type UserWithoutRelations = NonNullable<z.infer<typeof UserWithoutRelationsSchema>>;
export type UserWithRelations = NonNullable<z.infer<typeof UserWithRelationsSchema>>;
export type UserRelations = NonNullable<z.infer<typeof UserRelationsSchema>>;
export type SessionUser = Session['user'];

export type UserExperienceEntry = NonNullable<z.infer<typeof UserExperienceEntrySchema>>;
export type UserContactEntry = NonNullable<z.infer<typeof UserContactEntrySchema>>;
export type UserSkillEntry = NonNullable<z.infer<typeof UserSkillEntrySchema>>;
export type UserLanguageEntry = NonNullable<z.infer<typeof UserLanguageEntrySchema>>;
export type UserPicker = z.infer<typeof UserGetSchema>;
