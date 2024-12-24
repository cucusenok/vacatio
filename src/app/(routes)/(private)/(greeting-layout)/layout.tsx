import { Suspense } from "react";
import { CreateCvModal } from "@/app/components/modals/create-cv";
import { MainNavigation } from "@/app/components/main-navigation";
import { api } from "@/trpc/server";

const Username = () => {
/*  const user = await api.user.get({ columns: { name: true } });
  const name = user?.name?.split(" ")[0] ?? user?.name;*/
  const name = "username"
  return <span className="appear-animation text-center">&#44;&nbsp;{name}</span>;
};

const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();

  let greeting = "🌚 Good Evening";
  if (hours < 12) greeting = "🌤️  Good Morning";
  else if (hours < 18) greeting = "🌞  Good Afternoon";

  return (
    <span className="whitespace-nowrap text-[18px] font-semibold text-accent-500">
      {greeting}
      <Suspense>
        <Username />
      </Suspense>
    </span>
  );
};

const Header = () => {
  return (
    <header className="flex-center md:flex-between mb-11 flex-wrap gap-4 bg-body px-8 py-6">
      <div className="flex-y">
        <MainNavigation />
        <CreateCvModal />
      </div>
      <Greeting />
    </header>
  );
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <footer className="pb-20" aria-hidden />
    </>
  );
};

export default Layout;
