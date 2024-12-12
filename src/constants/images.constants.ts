import type { templateIds } from '@/cv/templates/types';

type Images = {
	logo: string;
	arrow: string;
	jobBoards: {
		linkedin: string;
		glassdoor: string;
	};
	templateThumbnails: Record<keyof typeof templateIds, string>;
	illustrations: {
		pointing: string;
		money: string;
		writing: string;
		archiveFiles: string;
		timeToFly: string;
	};
};

export const images: Images = {
	logo: '/logo.png',
	arrow: '/arrow.png',
	jobBoards: {
		linkedin: '/job-boards/linkedin.webp',
		glassdoor: '/job-boards/glassdoor.png'
	},
	templateThumbnails: {
		redditTopTemplate: '/editor/templates/reddit-top-template.png',
		cleanTemplate: '/editor/templates/clean.png',
		boldTemplate: '/editor/templates/bold-template.png'
	},
	illustrations: {
		pointing: '/illustrations/pointing.webp',
		money: '/illustrations/money.png',
		writing: '/illustrations/writing.png',
		archiveFiles: '/illustrations/archive-files.png',
		timeToFly: '/illustrations/time-to-fly.png'
	}
};
