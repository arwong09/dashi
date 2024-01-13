import type { Config } from 'tailwindcss'
import { SafelistConfig } from 'tailwindcss/types/config'

const safelistColors = ['purple-700', 'fuchsia-600']
const safelist = [] as SafelistConfig[]

safelistColors.map((color) => {
  safelist.push(`bg-${color}`)
  safelist.push(`hover:bg-${color}/90`)
  safelist.push(`hover:from-${color}/90`)
  safelist.push(`hover:to-${color}/90`)
  safelist.push(`disabled:bg-${color}/30`)
  safelist.push(`disabled:from-${color}/30`)
  safelist.push(`disabled:to-${color}/30`)
})

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
