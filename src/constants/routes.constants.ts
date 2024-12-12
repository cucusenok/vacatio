/**
 * Whenever you change the folder structure, make sure to update the routes here.
 */
import {
	COMPANY_NAME_PARAM,
	CV_ID_PARAM,
	JUST_UPLOADED_CV_PARAM,
	PUBLIC_KEY_PARAM,
	YES_VALUE
} from './url-params.constants';

export const BASE_PATH = '/';

export const privateRoutes = {
	onboarding: (searchParams?: { uploaded?: boolean }) => {
		const { uploaded } = searchParams ?? {};
		const params = new URLSearchParams();
		if (uploaded) params.set(JUST_UPLOADED_CV_PARAM, YES_VALUE);

		return `/onboarding?${params.toString()}`;
	},

	home: '/home',
	files: '/files',
	applicationHistory: '/application-history',
	logout: '/logout',

	editor: (id?: string, companyName?: string | null, publicKey?: string) => {
		const params = new URLSearchParams();
		if (id) params.set(CV_ID_PARAM, id);
		if (companyName) params.set(COMPANY_NAME_PARAM, companyName);
		if (publicKey) params.set(PUBLIC_KEY_PARAM, publicKey);

		return `/cv/editor?${params.toString()}`;
	}
};

export const publicRoutes = {
	welcome: '/welcome',
	termsOfService: '/terms-of-service',
	privacyPolicy: '/privacy-policy'
};

export const VOCATIO_CHROME_EXTENSION_URL =
	'https://chromewebstore.google.com/detail/vocatio/bknmlolcaccbfcedimgmpnfcjadfelbn';

export const USER_LINKEDIN_URL = 'https://www.linkedin.com/in/';

export const LINKEDIN_JOB_SEARCH_URL = 'https://www.linkedin.com/jobs/search/';
export const GLASSDOOR_JOB_SEARCH_URL = 'https://www.glassdoor.com/job-listing/';
export const HH_JOB_SEARCH_URL = 'https://www.hh.ru/search/vacancy?text=';
