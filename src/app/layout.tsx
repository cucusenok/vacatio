import { GoogleTagManager } from '@next/third-parties/google';
import { type Metadata } from 'next';
import { Toaster } from '@/ui';
import './styles/globals.css';

export const metadata: Metadata = {
	title: 'Vocatio',
	description: 'Optimize your job search & save tons of time'
};

const GA_ID = 'G-QJNLB6ZMY7';

const RootLayout = (props: LayoutProps) => {
	const { children } = props;

	return (
		<html lang="en">
			<GoogleTagManager gtmId={GA_ID} />
			<body className="light flex min-h-[100dvh] flex-col scroll-smooth bg-body tracking-tight text-body antialiased">
				{children}
				<Toaster />
			</body>
		</html>
	);
};

export default RootLayout;
