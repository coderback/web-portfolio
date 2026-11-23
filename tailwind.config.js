module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Colours come from CSS variables in globals.css so dark mode swaps them in one place.
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        cobalt: 'var(--cobalt)',
        'on-cobalt': 'var(--on-cobalt)',
        yellow: 'var(--yellow)',
        'on-yellow': 'var(--on-yellow)',
        coral: 'var(--coral)',
        'on-coral': 'var(--on-coral)',
        tint: 'var(--tint)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        band: 'var(--band)',
        'on-band': 'var(--on-band)',
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
