import { z } from 'zod';

export const VacancySchema = z
	.object({
		requiredSkills: z.array(z.string()).nullable().optional(),
		responsibilities: z.array(z.string()).nullable().optional(),
		companyName: z.string().nullable().optional(),
		aiSummary: z.string().nullable().optional(),
		createdAt: z.string().nullable().optional(),
		updatedAt: z.string().nullable().optional(),
		id: z.string().nullable().optional(),
		image: z.string().nullable().optional(),
		jobTitle: z.string().nullable().optional(),
		location: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		salaryMin: z.string().nullable().optional(),
		salaryMax: z.string().nullable().optional(),
		salaryCurrency: z.string().nullable().optional(),
		isInferredSalary: z.boolean().nullable().optional(),
		isAnnualSalary: z.boolean().nullable().optional(),
		isHourlySalary: z.boolean().nullable().optional(),
		isMonthlySalary: z.boolean().nullable().optional(),
		requiredLanguages: z.array(z.string()).nullable().optional(),
		requiredRemote: z.string().nullable().optional(),
		seniority: z.string().nullable().optional(),
		employmentType: z.string().nullable().optional(),
		requiredYearsMin: z.string().nullable().optional(),
		requiredYearsMax: z.string().nullable().optional(),
		requiredEducation: z.string().nullable().optional(),
		originalDescription: z.string().nullable().optional(),
		contactPerson: z.string().nullable().optional()
	})
	.partial();
