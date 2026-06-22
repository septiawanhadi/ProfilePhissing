/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        foreground: 'var(--color-fg)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        neutral: {
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Times New Roman', 'serif'],
        body: ["'Lora'", 'Georgia', 'serif'],
        sans: ["'Inter'", "'Helvetica Neue'", 'sans-serif'],
        mono: ["'JetBrains Mono'", "'Courier New'", 'monospace'],
      },
      lineHeight: {
        'tight-hero': '0.9',
      },
    },
  },
  plugins: [],
}
