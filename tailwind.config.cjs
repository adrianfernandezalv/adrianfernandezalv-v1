/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html','./src/**/*.{jsx,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                'r-shadow': '10px 0px 10px 0px rgba(0,0,0,0.34)',
                'l-i-shadow': 'inset 10px 0px 5px 0px rgba(0,0,0,0.34)',
                'a-form': '3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255, 255, 255, 0.4), inset 3px 3px 10px rgba(0,0,0,1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);'
            },
            
            fontFamily: {
                inter: ['inter', 'serif']
            },
            colors: {
                // DARK PALETTE
                // Tipography
                'dp-text-primary': '#fff',
                'dp-text-secondary': 'rgba(255, 255, 255, 0.7)',
                'dp-text-disabled': 'rgba(255, 255, 255, 0.5)',
                // Buttons
                'dp-action-active': '#fff',
                'dp-action-hover': 'rgba(255, 255, 255, 0.08)',
                // Background
                'dp-background-default': '#121212',
                // Divider
                'dp-divider': 'rgba(255, 255, 255, 0.12)',

                // LIGHT PALETTE
                // Tipography
                'lp-text-primary': 'rgba(0, 0, 0, 0.87)',
                'lp-text-secondary': 'rgba(0, 0, 0, 0.6)',
                'lp-text-disabled': 'rgba(0, 0, 0, 0.38)',
                // Buttons
                'lp-action-active': 'rgba(0, 0, 0, 0.54)',
                'lp-action-hover': 'rgba(0, 0, 0, 0.04)',
                // Background
                'lp-background-default': '#fff',
                // Divider
                'lp-divider': 'rgba(0, 0, 0, 0.12)',
            }
        },
    },
    plugins: [],
}

