// "use client";

// import { useComponentContext } from "@/cv/stores/component-context";
// import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
// import { Autoresize } from "./autoresize";

// export const JobTitle = () => {
//   const { template, cv } = useDataContext();
//   const c = useComponentContext();

//   const jobTitleProps = {
//     className: template.baseComponents?.jobTitle?.className,
//     value: cv?.jobTitle,
//     ...c.hydratedProps,
//   };

//   return <Autoresize {...jobTitleProps} />;
// };
