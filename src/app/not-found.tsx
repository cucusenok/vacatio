import { privateRoutes } from '@/constants/routes.constants';
import { Link } from './components/ui';

// Sorry, we&apos;ve searched the galaxy but weren&apos;t able to locate that page.
const NotFoundPage = () => {
	return (
		<main className="flex-center grow flex-col gap-6 bg-layer-1">
			<div className="flex-center flex-col">
				{/* <Image src={images.notion.notFound} alt="Not found" width={250} height={250} /> */}
				<h1 className="flex-center gap-3 text-center text-headline-2 font-bold">The requested page was not found.</h1>
			</div>
			<Link href={privateRoutes.home}>Take me to the home page</Link>
		</main>
	);
};

export default NotFoundPage;
