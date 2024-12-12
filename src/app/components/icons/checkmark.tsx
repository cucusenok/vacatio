import type { SVGProps } from "react";
import { cn } from "@/helpers/object.helpers";

const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="graphics-symbol"
    viewBox="0 0 20 20"
    className={cn(
      "checkmark block h-6 w-6 shrink-0 scale-100 fill-accent opacity-100 transition",
      props.className,
    )}
  >
    <path d="M10.0693 18.166C14.7759 18.166 18.6606 14.2812 18.6606 9.58301C18.6606 4.88477 14.7676 1 10.061 1C5.36279 1 1.48633 4.88477 1.48633 9.58301C1.48633 14.2812 5.37109 18.166 10.0693 18.166ZM9.13965 13.6836C8.82422 13.6836 8.56689 13.5508 8.33447 13.2437L6.30078 10.7783C6.15137 10.5874 6.07666 10.3965 6.07666 10.189C6.07666 9.75732 6.41699 9.40869 6.84863 9.40869C7.10596 9.40869 7.30518 9.5 7.521 9.77393L9.11475 11.791L12.5347 6.3125C12.7173 6.02197 12.9497 5.88086 13.2153 5.88086C13.6387 5.88086 14.0205 6.17139 14.0205 6.61133C14.0205 6.80225 13.9209 7.00977 13.8047 7.19238L9.91162 13.2437C9.729 13.5342 9.45508 13.6836 9.13965 13.6836Z" />
  </svg>
);
export default SvgChevron;