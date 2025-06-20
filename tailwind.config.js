/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            strong: {
              color: theme('colors.foreground'),
            },
            code: {
              backgroundColor: theme('colors.muted.DEFAULT'),
              color: theme('colors.foreground'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: 'normal',
              display: 'inline',
              fontSize: '0.875em',
              lineHeight: '1.5',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'p code': {
              display: 'inline',
              whiteSpace: 'normal',
            },
            'pre code': {
              display: 'block',
              whiteSpace: 'pre',
            },
          },
        },
        dark: {
          css: {
            strong: {
              color: theme('colors.foreground'),
            },
            code: {
              backgroundColor: theme('colors.muted.DEFAULT'),
              color: theme('colors.foreground'),
              display: 'inline',
              fontSize: '0.875em',
              lineHeight: '1.5',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'p code': {
              display: 'inline',
              whiteSpace: 'normal',
            },
            'pre code': {
              display: 'block',
              whiteSpace: 'pre',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}