export { v4 as uuidv4 } from 'uuid';

export const stripHtmlTags = (text: string | undefined | null) => {
	if (!text) return '';
	return text.replace(/<[^>]*>?/gm, '');
};

export const isUrl = (url: string | null | undefined) => {
	if (!url) return false;

	try {
		new URL(url);
		return true;
	} catch (error) {
		return false;
	}
};

/**
 * This approach is more permissive and might allow some strings that are not technically valid URLs
 * according to the official specification, but it could be more practical depending on your use case.
 */
export const isUrlPermissive = (url: string | null | undefined) => {
	if (!url) return false;

	// Regex to check for a basic structure of a URL (more lenient than URL constructor)
	const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	return urlPattern.test(url);
};

export const measureDataContent = (data: unknown) => {
	return new TextEncoder().encode(JSON.stringify(data)).length;
};

export const levenshteinDistance = (a: string, b: string): number => {
	const matrix: number[][] = [];

	// Initialize the matrix
	for (let i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}
	for (let j = 0; j <= a.length; j++) {
		matrix[0]![j] = j;
	}

	// Fill in the rest of the matrix
	for (let i = 1; i <= b.length; i++) {
		for (let j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i]![j] = matrix[i - 1]![j - 1]!;
			} else {
				matrix[i]![j] = Math.min(
					matrix[i - 1]![j - 1]! + 1, // substitution
					matrix[i]![j - 1]! + 1, // insertion
					matrix[i - 1]![j]! + 1 // deletion
				);
			}
		}
	}

	return matrix[b.length]![a.length]!;
};

export const normalizeString = (a: string) => {
	return a
		.toLowerCase()
		.trim()
		.replace(/^[^a-zA-Z]+/, '') // Remove leading non-alphabetical characters
		.replaceAll('.', '')
		.replaceAll(' ', '')
		.replaceAll(';', '')
		.replaceAll('js', '')
		.replaceAll('ts', '');
};

export const isDuplicate = (a: string, b: string) => {
	const normalizedA = normalizeString(a);
	const normalizedB = normalizeString(b);
	if (normalizedA === normalizedB) return true;

	const similarLength = Math.abs(normalizedA.length - normalizedB.length) <= 1;
	const closeDistance = levenshteinDistance(normalizedA, normalizedB) < 1;
	return similarLength && closeDistance;
};

export const onlyAlphabetical = (a: string) => {
	return a.replace(/[^a-zA-Z]/g, ''); // remove all non-alphabetical characters
};
