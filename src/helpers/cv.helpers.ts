import { omit, pick, snakeCase, take } from 'lodash-es';
import { v4 } from 'uuid';
import type { CvWithoutRelations } from '@/types/cv.types';
import type { UserWithRelations, UserWithoutRelations } from '@/types/user.types';
import type { Vacancy } from '@/types/vacancy.types';
import { normalizeString } from './string.helpers';
import { CvRelationsFieldsArray, CvWithoutRelationsFieldsArray } from '@/constants/cv.constants';

const createFilename = (user: UserWithoutRelations, vacancy?: Vacancy | null, prefix?: string, postfix?: string) =>
	snakeCase(
		`${prefix ? `${prefix} ` : ''}${user.name}${vacancy?.companyName ? ` ${vacancy.companyName}` : ''}${
			postfix ? ` ${postfix}` : ''
		}`
	);

const createCoverLetterPreview = (user: UserWithRelations, vacancy?: Vacancy | null) => {
	const { name, contacts } = user;

	/**
	 * User.
	 */
	// prettier-ignore
	const address = contacts?.find(({ name }) => name && normalizeString(name)?.includes('address'))?.value;
	// prettier-ignore
	const city = contacts?.find(({ name }) => name && normalizeString(name)?.includes('city'))?.value;
	// prettier-ignore
	const email = contacts?.find(({ name }) => name && normalizeString(name)?.includes('email'))?.value;
	// prettier-ignore
	const phone = contacts?.find(({ name }) => name && normalizeString(name)?.includes('phone'))?.value;

	/**
	 * Company.
	 */
	const companyName = vacancy?.companyName ?? '[Company Name]';
	const location = vacancy?.location ?? vacancy?.country ?? '[Company location]';
	const jobTitle = vacancy?.jobTitle ?? user.jobTitle ?? '[Job Title]';
	const companySkills = take(vacancy?.requiredSkills, 3).join(', ') ?? '[Company skills]';

	return `
  ${name ?? '[Your Name]'}
  ${address ?? '[Your Address]'}
  ${city ?? '[City, State, ZIP Code]'}
  ${email ?? '[Your Email Address]'}
  ${phone ?? '[Your Phone Number]'}
  ${new Date().toLocaleDateString()}

  Hiring Manager
  ${companyName}
  ${location}

  Dear Hiring Manager,

  I am writing to express my interest in the ${jobTitle} position at ${companyName}, as advertised. With a background as ${jobTitle} and extensive experience in ${companySkills}, I am confident that my qualifications align well with the requirements of this role.

  At my previous position, I was responsible for [Your responsibilities], where I honed my skills in [Your skills]. I am particularly drawn to this opportunity because of your company's commitment to [Company values], which resonates strongly with my own values and professional goals.

  Moreover, I am excited about the possibility of contributing to ${companyName} and supporting your team in achieving its objectives. With a focus on ${companySkills}, combined with my proficiency in [Your skills], I believe I can bring both immediate and long-term value.

  I would welcome the opportunity to discuss how my skills and experiences align with the goals of your team. Thank you for considering my application for this exciting role.

  Sincerely,
  ${name}`;
};

const createCvWithoutRelations = (
	user: UserWithoutRelations,
	vacancy?: Vacancy | null,
	cv?: Partial<CvWithoutRelations>
) => {
	return omit(
		{
			...pick(user, CvWithoutRelationsFieldsArray),
			summary: user.summary,
			filename: createFilename(user, vacancy),
			...cv
		},
		'id'
	);
};

export const createCvWithRelations = (user: UserWithRelations, vacancy?: Vacancy | null, cv?: CvWithoutRelations) => {
	const cvWithoutRelations = createCvWithoutRelations(user, vacancy, cv);
	const cvWithRelations = omit(
		{
			...cvWithoutRelations,
			...pick(user, CvRelationsFieldsArray),
			filename: createFilename(user, vacancy),
			coverLetter: createCoverLetterPreview(user, vacancy),
			publicKey: v4(),
			experiences: [
				{
					title: user.jobTitle,
					place: 'Company name',
					derivedFromExperienceId: v4(),
					period: `${new Date().getFullYear() - 5} - Present`,
					bulletPoints: Array.from({ length: 5 }, (_, i) => ({
						value: `Achievement ${i + 1}`
					}))
				}
			],
			...cv
		},
		'id',
		'summary'
	);

	return cvWithRelations;
};
