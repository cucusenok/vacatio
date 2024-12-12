// "use client";

// import { type CSSProperties, useState } from "react";
// import cn from "classnames";
// import { debounce } from "lodash-es";
// import { Icon } from "@/app/components/Icon";
// import { Popover, PopoverContent, PopoverTrigger, ScrollArea } from "@/app/components/ui";
// import { type IconKey, availableIcons } from "@/constants/icons.constants";
// import { useComponentContext } from "@/cv/stores/component-context";
// import { Autoresize, type AutoresizeProps } from "./autoresize";

// export type GroupProps = {
//   id: string;
//   label: string;
//   value: string;
//   image?: string;
//   containerClassName?: string;
//   containerStyle?: CSSProperties;
//   labelProps?: AutoresizeProps;
//   valueProps?: AutoresizeProps;
// } & IconProps;

// type IconProps = {
//   icon: IconKey;
// };

// const filterIcons = (filter: string) => {
//   const lowerFilter = filter.toLowerCase();
//   return availableIcons.filter((iconKey) => iconKey.toLowerCase().includes(lowerFilter));
// };

// const IconSelector = (props: IconProps) => {
//   const { icon: initialIcon } = props;
//   const [currentIcon, setCurrentIcon] = useState<IconKey>(initialIcon);
//   const [filter, setFilter] = useState("");
//   const filteredIcons = filterIcons(filter);

//   const debouncedSetFilter = debounce((value) => setFilter(value), 600);

//   return (
//     <Popover>
//       <PopoverTrigger className="icon">
//         <Icon iconKey={currentIcon} />
//       </PopoverTrigger>
//       <PopoverContent>
//         <label htmlFor="search" className="sr-only">
//           Enter any keyword
//         </label>
//         <input
//           name="search"
//           onChange={(e) => debouncedSetFilter(e.target.value)}
//           className="lg field"
//           placeholder="Enter any keyword"
//         />

//         <ScrollArea height={200} className="h-[200px] w-[350px] rounded-md border p-4">
//           {filteredIcons.map((iconKey) => {
//             return (
//               <button key={iconKey} onClick={() => setCurrentIcon(iconKey)} className="p-1">
//                 <Icon iconKey={iconKey} />
//               </button>
//             );
//           })}
//           {filteredIcons.length === 0 && (
//             <div className="flex-center text-secondary">Try a different keyword</div>
//           )}
//         </ScrollArea>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export const Group = () => {
//   const { type, hydratedProps = {} } = useComponentContext();
//   const { containerClassName, icon, image, label, labelProps, value, valueProps } =
//     hydratedProps as GroupProps;

//   return (
//     <div
//       className={cn(containerClassName, "group grid items-center gap-1", {
//         "grid-cols-[15px_1fr]": type === "icon-group" && icon,
//         "grid-cols-2": type === "group" && label,
//         "grid-cols-[50px_1fr] gap-3": type === "icon-group" && image,
//       })}
//     >
//       {type === "icon-group" && image && (
//         <img src={image} className="image h-[50px] w-[50px]" alt={label || type} />
//       )}
//       {type === "icon-group" && icon && <IconSelector icon={icon} />}
//       {type === "group" && <Autoresize type="label" value={label} {...labelProps} />}
//       <Autoresize value={value} {...valueProps} />
//     </div>
//   );
// };
