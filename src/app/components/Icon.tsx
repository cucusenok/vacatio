// import dynamic from "next/dynamic";
// import { Suspense, memo } from "react";
// import { type IconKey } from "@/constants/icons.constants";

// export const Icon = memo((props: { iconKey: string; fallback?: IconKey }) => {
//   const { iconKey } = props;
//   if (!iconKey) return null;

//   const IconElement = dynamic(
//     () =>
//       import(`./icons/cv/${String(iconKey)}`)
//         .then((module) => {
//           if (module?.default) {
//             return module.default;
//           } else {
//             console.error(`No default export found for icon ${iconKey}`);
//             return props.fallback
//               ? dynamic(() => import(`./icons/cv/${String(props.fallback)}`))
//               : () => null;
//           }
//         })
//         .catch((error) => {
//           console.error(`Error loading icon for ${iconKey}:`, error);
//           return props.fallback
//             ? dynamic(() => import(`./icons/cv/${String(props.fallback)}`).catch(() => null))
//             : () => null;
//         }),
//     {
//       loading: () => <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />,
//       ssr: false,
//     },
//   );
//   return (
//     <Suspense>
//       <IconElement aria-label={`${iconKey} icon`} />
//     </Suspense>
//   );
// });

// Icon.displayName = "Icon";
