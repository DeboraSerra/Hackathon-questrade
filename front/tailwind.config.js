/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-open-sans)',
        alt: 'var(--font-roboto)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        green: {
          50: '#d9fcdb',
          100: '#abddad',
          200: '#7bc07f',
          300: '#5baf5f',
          400: '#58a85c',
          500: '#499c4d',
          600: '#328636',
          700: '#227226',
          800: '#156319',
          900: '#0d5210',
        },
        blue: {
          50: '#f2f2f8',
          100: '#0066db',
          200: '#2783d3',
          300: '#317dc0',
          400: '#3974a7',
          500: '#406c92',
          600: '#3d5f7c',
          700: '#3c5366',
          800: '#364653',
          900: '#262d33',
        }
      },
      backgroundImage: {
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
      blur: {
        full: '194px',
      },
      fontSize: {
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
