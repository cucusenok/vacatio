import { omit } from 'lodash-es';
import type { Intermediate } from '@/types/db.types';
import type { userContactTable } from '@/server/db/schema';
import { isDuplicate } from './string.helpers';
import { iconKeywordsMap } from '@/constants/icons.constants';

type Entry = Intermediate<typeof userContactTable.$inferInsert>;

type EntryWithIcon<T extends Entry> = T & {
	icon: string;
};

export const withIcons = <T extends Entry>(entry: T): EntryWithIcon<T> => {
	if (!entry.name) return { ...entry, icon: '' };
	const lowerName = entry.name.toLowerCase();
	let icon = '';

	for (const iconMapping of iconKeywordsMap) {
		const { key, exact, partial } = iconMapping;

		if (exact.includes(entry.name) || exact.some((e) => e.toLowerCase() === lowerName)) {
			icon = key;
			break;
		}

		if (partial.some((keyword) => lowerName.includes(keyword.toLowerCase()))) {
			icon = key;
			break;
		}
	}

	return { ...entry, icon };
};

export const purifyBulletPoint = (bp: string) => {
	bp = bp.replace(/^[^a-zA-Z]+/, '');
	return bp.replace(/\.,/g, ',').trim();
};

export const formatBulletPoint = (str: string) => {
	if (!str.endsWith('.')) {
		return str + '.';
	}
	return str;
};

export const removeDbFields = <T extends object>(obj: T) => {
	return omit(obj, ['id', 'createdAt', 'updatedAt']) as Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
};

/**
 * You pass two arrays. The second one will be returned. Elements that it has in common with the first array will be removed.
 * You can specify which properties to consider for duplication.
 */
export const removeIntersections = (
	array1: { name?: string | null; value?: string | null }[],
	array2: { name?: string | null; value?: string | null }[],
	by: { name?: boolean; value?: boolean }
) => {
	return array2.filter(
		(item2) =>
			!array1.some(
				(item1) =>
					(!by.name || (item1.name && item2.name && isDuplicate(item1.name, item2.name))) &&
					(!by.value || (item1.value && item2.value && isDuplicate(item1.value, item2.value)))
			)
	);
};
