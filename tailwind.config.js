
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",  // Ваши файлы проекта
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/components/(form|input|modal|navbar).js"  // HeroUI компоненты
    ],
    theme: {
        extend: {}
    },
    darkMode: "class",  // Это нормально для v4
    plugins: [heroui()],  // Плагин HeroUI
};