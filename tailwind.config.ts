import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  safelist: [
    'animate-open-menu', 
    'toggle-btn'
  ],
  plugins: [],
}

export default config
