import * as React from "react";
import type { SVGProps } from "react";
const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#ADACC9"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 3 5 8l5 5"
    />
  </svg>
);
export default SvgChevron;
