import { Dancing_Script, EB_Garamond, Inter, Noto_Serif, Rubik } from 'next/font/google';

/**
 * Font loaders must be called and assigned to a const in the module scope.
 */
const rubik = Rubik({ subsets: ['latin'] });
const garamond = EB_Garamond({ subsets: ['latin'] });
const notoSerif = Noto_Serif({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

/**
 * Playful font used on the landing page.
 */
export const dancingScript = Dancing_Script({
	subsets: ['latin'],
	display: 'swap'
});

export const fonts = {
	rubik: {
		label: 'Rubik',
		font: rubik
	},
	garamond: {
		label: 'Garamond',
		font: garamond
	},
	serif: {
		label: 'Serif',
		font: notoSerif
	},
	times: {
		label: 'Times New Roman',
		font: 'times'
	},
	arial: {
		label: 'Arial',
		font: 'arial'
	},
	inter: {
		label: 'Inter',
		font: inter
	}
};

export type Font = keyof typeof fonts;