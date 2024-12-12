// "use client";

// import { useEffect, useState } from "react";

// export const useZoom = () => {
//   const [zoom, setZoom] = useState(1);

//   const onZoomChange = (newZoom: number) => {
//     setZoom(() => Math.min(Math.max(newZoom, 0.5), 2));
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (
//         (event.ctrlKey || event.metaKey) &&
//         (event.key === "+" || event.key === "-" || event.key === "=")
//       ) {
//         event.preventDefault();
//         const delta = event.key === "-" ? -0.1 : 0.1;
//         onZoomChange(zoom + delta);
//       }
//     };

//     const handleWheel = (event: WheelEvent) => {
//       if (event.ctrlKey || event.metaKey) {
//         event.preventDefault();
//         const delta = event.deltaY < 0 ? 0.1 : -0.1;
//         onZoomChange(zoom + delta);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [zoom, onZoomChange]);

//   return { zoom, setZoom: onZoomChange };
// };
