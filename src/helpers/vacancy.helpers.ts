import { Currencies } from '@/constants/vacancy.constants';

export const getCurrencySymbol = (currency: string) => {
	return Currencies[currency?.toUpperCase() as keyof typeof Currencies] ?? currency;
};

const parseSalary = (salaryMin?: string | null, salaryMax?: string | null, s?: string | null): number | undefined => {
	const minSalary = salaryMin ? parseFloat(salaryMin) : undefined;
	const maxSalary = salaryMax ? parseFloat(salaryMax) : undefined;

	if (typeof minSalary === 'number' ?? typeof maxSalary === 'number') {
		return minSalary ?? maxSalary;
	}

	if (s) {
		const numberMatch = s.match(/(\d{1,3}(?:,\d{3})*|\d+)(?:\.\d+)?/);
		if (numberMatch) {
			return parseFloat(numberMatch[0].replace(/,/g, ''));
		}
	}

	return undefined;
};

const determineSalaryTypeFromAmount = (amount: number): string => {
	if (amount < 150) return 'hourly';
	if (amount < 15000) return 'monthly';
	return 'annual';
};

const determineSalaryTypeFromText = (s: string): string | undefined => {
	if (/hr|hour|hourly|per hour|per hr|\/hour|\/hr/i.test(s)) return 'hourly';
	if (/month|monthly|per month/i.test(s)) return 'monthly';
	if (/yr|year|annual|annually|per year|per annum|p\.a\./i.test(s)) return 'annual';
	return undefined;
};

export const determineSalaryType = (
	s: string | null,
	salaryMin?: string | null,
	salaryMax?: string | null
): { isAnnualSalary: boolean; isHourlySalary: boolean; isMonthlySalary: boolean } => {
	const amount = parseSalary(salaryMin, salaryMax, s);
	let salaryType: string | undefined;

	if (typeof amount === 'number') {
		salaryType = determineSalaryTypeFromAmount(amount);
	} else if (s) {
		salaryType = determineSalaryTypeFromText(s);
	}

	return {
		isAnnualSalary: salaryType === 'annual',
		isHourlySalary: salaryType === 'hourly',
		isMonthlySalary: salaryType === 'monthly'
	};
};

export const normalizeInferredSalary = (salaryMin: string | null | undefined, salaryMax: string | null | undefined) => {
	const min = parseFloat(salaryMin ?? '0');
	const max = parseFloat(salaryMax ?? '0');

	return {
		salaryMin: String(Math.round(min * 0.6)),
		salaryMax: String(Math.round(max * 0.6))
	};
};
