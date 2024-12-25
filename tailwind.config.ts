import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradientOrange: '#FF7D1F',
        gradientPurple: '#880E9C',
        linkColor: '#C7495A',
        grey: '#232323',
        lightGrey: '#303030',
      },
    },
  },
  plugins: [],
} satisfies Config;
