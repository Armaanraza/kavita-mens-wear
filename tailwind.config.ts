import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1F1F1F',
        gold: '#C7A87A',
        ivory: '#F1EAE3',
        stone: '#DBD0C4'
      },
      fontFamily: {
        display: ['var(--font-cormorant)'],
        body: ['var(--font-inter)']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(31,31,31,0.08)',
        luxe: '0 30px 80px rgba(31,31,31,0.14)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(199,168,122,0.18), transparent 36%), linear-gradient(135deg, #1f1f1f 0%, #4b4034 44%, #d7c4ab 100%)'
      }
    }
  },
  plugins: []
};
export default config;
