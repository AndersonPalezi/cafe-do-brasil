import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#d5c4a1', // Cor clara de café
          DEFAULT: '#6f4f28', // Cor padrão de café
          dark: '#3b2f1e', // Cor escura de café
        },
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(to right, #000, #3b2f1e)', // Gradiente de café
      },
    },
  },
  plugins: [],
};

export default config;
