// "use client";

// import { LiaMinusSolid, LiaPlusSolid } from "react-icons/lia";
// import { PiQuestionMarkLight } from "react-icons/pi";
// import { motion } from "framer-motion";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ui";

// const INCREMENT = 0.1;

// const animation = {
//   initial: { y: 100, opacity: 0 },
//   animate: { y: 0, opacity: 1 },
//   transition: { duration: 0.6, ease: "easeOut", delay: 1 },
// };

// export const BottomToolbar = () => {
//   const { zoom, setZoom } = useDataContext();

//   return (
//     <div className="fixed bottom-0 right-0 px-8 py-4">
//       <motion.div className="flex-y group gap-3" {...animation}>
//         <div className="appear-animation hidden text-xxs group-hover:block">
//           {Math.round(zoom * 100)}%
//         </div>

//         <TooltipProvider>
//           <div className="flex-y">
//             <Tooltip>
//               <TooltipTrigger
//                 onClick={() => setZoom(zoom - INCREMENT)}
//                 className="common icon sm !rounded-l-full !rounded-r-none bg-layer-1 shadow-lg"
//               >
//                 <LiaMinusSolid size={18} />
//               </TooltipTrigger>
//               <TooltipContent sideOffset={15}>Zoom out</TooltipContent>
//             </Tooltip>

//             <Tooltip>
//               <TooltipTrigger
//                 onClick={() => setZoom(zoom + INCREMENT)}
//                 className="common icon sm !rounded-l-none !rounded-r-full border-l bg-layer-1 shadow-lg"
//               >
//                 <LiaPlusSolid size={18} />
//               </TooltipTrigger>
//               <TooltipContent sideOffset={15}>Zoom in</TooltipContent>
//             </Tooltip>
//           </div>

//           <Tooltip>
//             <TooltipTrigger className="common icon sm !rounded-full bg-layer-1 shadow-lg">
//               <PiQuestionMarkLight size={18} />
//             </TooltipTrigger>
//             <TooltipContent sideOffset={15}>Help and resources</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </motion.div>
//     </div>
//   );
// };
