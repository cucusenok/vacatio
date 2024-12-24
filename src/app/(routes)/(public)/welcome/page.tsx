//import { Dancing_Script } from "next/font/google";
import { FaCreditCard, FaGoogle } from "react-icons/fa";
import { cn } from "@/helpers/object.helpers";
import { SignInButton } from "@/app/components/sign-in-button";
import { images } from "@/constants/images.constants";
import { publicRoutes } from "@/constants/routes.constants";
import { Link } from "@/ui";

/*const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});*/

const Navigation = () => {
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#features">
        Features
      </Link>
      <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#templates">
        Templates
      </Link>
    </nav>
  );
};

const CallToAction = () => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter text-accent-500 sm:text-5xl xl:text-6xl/none">
          Simplest CV editor <br /> you&apos;ll ever use
        </h1>
        Create each CV around the job you apply for. In 5 seconds.
      </div>
      <div className="flex-y flex-wrap gap-5">
        <SignInButton className="interactive primary md with-icon">
          <FaGoogle />
          <span className="pb-px">Sign in with Google</span>
        </SignInButton>
        <p className="flex-y gap-2 text-xs">
          <FaCreditCard />
          No credit card required. Ever.
        </p>
      </div>
    </div>
  );
};

const Illustration = (props: { className?: string; size: number }) => {
  const { className, size } = props;

  return (
    <div className={cn("relative", className)}>
      <span
        className={cn(
          //dancingScript.className,
          "absolute left-[-50px] top-[-15%] -rotate-12 text-hero font-bold",
        )}
      >
        And it&apos;s 100% free
      </span>
      <img
        src={images.illustrations.writing}
        alt="writing"
        width={size}
        height={size}
        draggable={false}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex-center flex-col-reverse gap-x-[10%] gap-y-12 py-12 md:py-24 lg:flex-row lg:py-32 xl:py-48">
      <CallToAction />
      <Illustration className="hidden lg:block" size={400} />
      <Illustration className="mt-11 lg:hidden" size={250} />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500">© 2024 Vocatio. All rights reserved.</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href={publicRoutes.termsOfService}
          newTab
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href={publicRoutes.privacyPolicy}
          newTab
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

const WelcomePage = () => {
  return (
    <>
      <header className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link className="flex-center gap-2" href="#">
          <Image src={images.logo} alt="Logo" width={25} height={25} />
          <span className="text-xl font-semibold text-accent-500">Vocatio</span>
        </Link>
        <Navigation />
      </header>
      <main className="wrapper flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default WelcomePage;
