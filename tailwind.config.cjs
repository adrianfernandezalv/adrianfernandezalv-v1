/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html','./src/**/*.{jsx,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', 'serif']
            },
            colors: {
                // Dark Theme
                'dark-bg': '#202023', // Main background
                'dark-text-1': '#e2e8f0', // Font color style #1
                'dark-text-2': '#FFF', // Font color style #2

                // Light Theme
                'light-bg': '#e2e8f0', // Main background
                'light-text-1': '#202023', // Font color style #1
                'light-text-2': '', // Font color style #2
            }
        },
    },
    plugins: [],
}

