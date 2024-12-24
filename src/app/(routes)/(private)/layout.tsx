import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { PusherInitializer } from "@/app/ws/pusher-initializer";
import { PusherRedirector } from "@/app/ws/pusher-redirector";
import { authOptions } from "@/server/auth";

const PusherInstance = () => {
  //const session = await getServerSession(authOptions);
  //const userId = session?.user.id;
  const userId = null;
  if (!userId) return null;

  return (
    <>
      <PusherInitializer userId={userId} />
      <PusherRedirector />
    </>
  );
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      {children}
      <Suspense>
        <PusherInstance />
      </Suspense>
    </>
  );
};

export default Layout;
