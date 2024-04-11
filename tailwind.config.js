/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Para proyectos Vue 3 con todas las extensiones
    "./ruta/a/tu/otro/componente.vue", // Para componentes específicos
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        "colorOne": "#040711",
         "colorTwo": "#394150",
         "colorTree": "#4D5562",
         "colorFor": "#CDD5E0",
         "colorFive": "#F9FAFB",
         "colorSix": "#3662E3",
         "colorSeven": "#7CA9F3",
         "colorEigh": "#212936cc",
         "colorNine": "#121826cc"
      }
    },
  },
  plugins: [],
}

