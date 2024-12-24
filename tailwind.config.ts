import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        button: "0.3125rem",
        toolbar: "0.75rem",
      },
      boxShadow: {
        elevation: "0 1px 3px 0 #00000026, 0 0 .5px 0 #0000004d",
      },
      height: {
        a4: "1122px",
        toolbar: "2.5rem",
        modal: "45rem",
      },
      width: {
        a4: "793px",
        modal: "72rem",
      },
      minHeight: {
        a4: "1122px",
      },
      maxHeight: {
        a4: "1122px",
        modal: "45rem",
      },
      maxWidth: {
        a4: "793px",
        modal: "72rem",
      },
      zIndex: {
        god: "99999",
        modal: "50",
        overlay: "49",
        dropdown: "48",
        layout: "47",
        tooltip: "46",
        "page-break": "45",
        a4: "44",
      },
      fontFamily: {
        sans: [
          "ui-sanserif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      fontSize: {
        hero: [
          "clamp(1.5rem, 1.05rem + 2vw, 3.25rem)",
          {
            lineHeight: "clamp(1.65rem, 1.155rem + 2.2vw, 3.575rem)",
          },
        ],
        headline: [
          "clamp(1.5rem, 1.4036rem + 0.4286vw, 1.875rem)",
          {
            lineHeight: "clamp(1.625rem, 1.4579rem + 0.7429vw, 2.275rem)",
          },
        ],
        "headline-2": [
          "1.5rem",
          {
            lineHeight: "clamp(1.625rem, 1.4579rem + 0.7429vw, 2.275rem)",
          },
        ],
        md: "1rem",
        sm: "0.875rem", // 14px
        xs: "0.75rem", // 12px
        xxs: "0.6875rem", // 11px
      },

      backgroundColor: {
        body: "var(--bg-body)",
        "layer-1": "var(--bg-layer-1)",
        "layer-2": "var(--bg-layer-2)",
        "layer-3": "var(--bg-layer-3)",
        accent: "var(--accent)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "accent-300": "var(--accent-300)",
        "accent-400": "var(--accent-400)",
        "accent-500": "var(--accent-500)",
        "accent-600": "var(--accent-600)",
        "accent-700": "var(--accent-700)",
        success: "var(--success)",
        danger: "var(--danger)",
        muted: "var(--muted)",
        overlay: "var(--overlay)",
      },
      colors: {
        body: "var(--text-body)",
        "layer-1": "var(--text-layer-1)",
        "layer-2": "var(--text-layer-2)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "accent-300": "var(--accent-300)",
        "accent-400": "var(--accent-400)",
        "accent-500": "var(--accent-500)",
        "accent-600": "var(--accent-600)",
        "accent-700": "var(--accent-700)",
        success: "var(--success)",
        danger: "var(--danger)",
        muted: "var(--muted)",
      },

      animation: {
        "circle-motion": "circle-motion 10s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotate: "rotate 1s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },

      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "circle-motion": {
          "0%": {
            transform: "rotate(0deg) translateX(0px) translateY(0px)",
          },
          "25%": {
            transform: "rotate(90deg) translateX(50px) translateY(50px)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(100px) translateY(100px)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(50px) translateY(50px)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(0px) translateY(0px)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
