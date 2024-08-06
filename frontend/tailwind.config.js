/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            darkBlue: '#101A22',
            textGray: '#B0B0B0',
            subCategoryGray: '#C5C5C5',
            borderGray: '636363',
            cardbg: '#172E3F',
         },
         fontFamily: {
            questrial: ['Questrial', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
