import type { z } from 'zod';
import type { vacancies } from '@/server/db/schema';
import type { VacancySchema } from '@/validation/vacancy.validation';

export type Vacancy = z.infer<typeof VacancySchema>;

export type UntrustedVacancy = Partial<Vacancy> & {
	originalDescription: string;
};

export type InsertVacancy = typeof vacancies.$inferInsert;
export type RequiredSkills = NonNullable<Vacancy['requiredSkills']>;
export type Responsibilities = NonNullable<Vacancy['responsibilities']>;
