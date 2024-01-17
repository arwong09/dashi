import { Config } from 'tailwindcss'

export const customConfig = {
  textButtonColor: 'text-sky-500 hover:text-sky-400',
  ctaBgColor:
    'bg-gradient-to-b to-purple-700 from-fuchsia-600 hover:to-purple-700/90 hover:from-fuchsia-600/90 disabled:from-purple-700/30 disabled:to-fuchsia-600/30',
}

const safelist = [
  ...customConfig.ctaBgColor.split(' '),
  ...customConfig.textButtonColor.split(' '),
]

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist,
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(1px)' },
          '50%': { transform: 'translateY(-1px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
