import { z } from 'zod';

type Fields = Record<string, unknown> | undefined;

export const createGetSchema = (a: NonNullable<Fields>, b: NonNullable<Fields>) => {
	const ColumnsSchema = z.object(Object.fromEntries(Object.keys(a).map((key) => [key, z.boolean().optional()])));

	const WithSchema = z.object(Object.fromEntries(Object.keys(b).map((key) => [key, z.any().optional()])));

	const GetSchema = z.object({
		columns: ColumnsSchema.optional(),
		with: WithSchema.optional()
	});

	return GetSchema;
};

export const resolveColumns = (columns: Fields) => {
	if (!columns) return undefined;
	return Object.keys(columns).length > 0 ? columns : undefined;
};

export const resolveWith = (withs: Fields) => {
	if (!withs) return undefined;
	return Object.keys(withs).reduce((acc, key) => {
		if (withs[key as keyof Fields]) {
			acc![key as keyof Fields] = true;
		}
		return acc;
	}, {} as Fields);
};
