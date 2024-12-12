import { get } from 'lodash-es';
import { fonts } from '@/constants/font.constants';

export const getFont = (font: keyof typeof fonts) => {
	const { font: f } = get(fonts, font);
	return get(f, 'className', f);
};
