import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
        montreal: ['__montreal', 'system-ui'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 100s linear infinite', // Slowed down to 30 seconds for smoother scrolling
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Perspective for 3D effect
        '.perspective': {
          perspective: '1000px',
        },
        // Preserve 3D transformations
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        // Rotate Y axis by 180 degrees for the flip
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        // Hide backface of the element
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      };

      // Add these new utilities and allow them to be used in responsive states and on hover
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

export default config;
