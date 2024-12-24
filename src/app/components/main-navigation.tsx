import { privateRoutes } from "@/constants/routes.constants";
import { Badge } from "@/ui";
import { NavigationLink } from "./navigation-link";

const ApplicationsCount = () => {
  //const count = await api.vacancy.getTotalCountForUser();
  return <Badge className="danger sm">{10}</Badge>;
};

const FilesCount = () => {
  //const count = await api.cv.getTotalCountForUser();
  return <Badge className="danger sm">10</Badge>;
};

export const MainNavigation = () => {
  return (
    <nav className="flex-y gap-1">
      <NavigationLink href={privateRoutes.home}>Home</NavigationLink>
      <NavigationLink href={privateRoutes.applicationHistory}>
        Application history <ApplicationsCount />
      </NavigationLink>
      <NavigationLink href={privateRoutes.files}>
        Files <FilesCount />
      </NavigationLink>
    </nav>
  );
};
