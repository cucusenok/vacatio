import type { CvWithoutRelations } from '@/types/cv.types';
import { typedKeys } from '@/helpers/object.helpers';

export const PAGE_BREAK_HEIGHT = 80;
export const A4_HEIGHT = 1122;
export const A4_WIDTH = 793;
export const $PAGE_BREAK_CN = 'page-break';

export const MAX_UPLOAD_SIZE = 1 * 1024 * 1024; // 1MB = 1-2 A4 PDF pages; bcs of Server Actions limitation
export const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/msword'];

export const CvWithoutRelationsPicker: Record<keyof CvWithoutRelations, true> = {
	id: true,
	name: true,
	image: true,
	createdAt: true,
	updatedAt: true,
	jobTitle: true,
	isDefault: true,
	designName: true,
	filename: true,
	summary: true,
	coverLetter: true,
	publicKey: true
} as const;

export const CvRelationsPicker: Record<string, true | { with: Record<string, true> }> = {
	experiences: { with: { bulletPoints: true } },
	educations: true,
	skills: true,
	languages: true,
	contacts: true
} as const;

export const CvWithoutRelationsFieldsArray = typedKeys(CvWithoutRelationsPicker);
export const CvRelationsFieldsArray = typedKeys(CvRelationsPicker);
