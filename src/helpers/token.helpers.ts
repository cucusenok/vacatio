/**
 * Token param to handle redirection logic.
 * Not sensitive.
 */

export const isValidToken = (token: string) => {
	const parts = token.split('_');

	if (!parts[0]) return false;

	const expirationTime = parseInt(parts[0], 16);

	return Date.now() < expirationTime;
};

export const genToken = (expSeconds: number) => {
	const expirationTime = Date.now() + expSeconds * 1000;
	const token = `${expirationTime.toString(16)}_${Math.random().toString(16).substr(2, 8)}`;
	return token;
};
