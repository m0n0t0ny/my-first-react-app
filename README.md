# React + Vite

- 1 install Node: npm i
- 2 Install tailwindcss via npm, and create your tailwind.config.js file.
  
  Terminal
  npm install -D tailwindcss
  npx tailwindcss init
  Configure your template paths
  
  Add the paths to all of your template files in your tailwind.config.js file.
  tailwind.config.js

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
  Add the Tailwind directives to your CSS
  Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

  src/input.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
- 3 istall styled components: npm install styled-components
  In package.json:
  {
    "resolutions": {
      "styled-components": "^5"
    }
  }

- 4 Run it: npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
