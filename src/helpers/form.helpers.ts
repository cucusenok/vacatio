import type { UseFormReturn } from 'react-hook-form';
import { pickBy } from 'lodash-es';
import { typedKeys } from './object.helpers';
import { DIRTY_LS_KEY } from '@/constants/ls.constants';
import { StringArraySchema } from '@/validation/shared.validation';

export const triggerSubmission = (event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
	const form = event?.currentTarget.closest('form') ?? document.querySelector('form');
	if (!form) return;
	form.requestSubmit();
};

export const setDirty = (key: string) => {
	const ls = localStorage.getItem(DIRTY_LS_KEY);

	if (ls) {
		const dirty = StringArraySchema.safeParse(JSON.parse(ls));
		if (!dirty.success) return;
		if (dirty.data.includes(key)) return;
		dirty.data.push(key);
		localStorage.setItem(DIRTY_LS_KEY, JSON.stringify(dirty.data));
		return;
	}

	localStorage.setItem(DIRTY_LS_KEY, JSON.stringify([key]));
};

export const getDirty = (getFieldState: UseFormReturn['getFieldState'], data: Record<string, unknown>) => {
	const one = typedKeys(pickBy(data, (_, k) => getFieldState(k)?.isDirty));
	const ls = localStorage.getItem(DIRTY_LS_KEY);
	if (!ls) return one;
	const dirties = StringArraySchema.safeParse(JSON.parse(ls));
	if (!dirties.success) return one;
	return Array.from(new Set([...one, ...dirties.data]));
};

export const clearDirty = () => {
	localStorage.removeItem(DIRTY_LS_KEY);
};
