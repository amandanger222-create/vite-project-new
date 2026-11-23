# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Running locally

When this folder opens in VS Code, the Vite development server starts automatically. Allow automatic tasks when VS Code asks the first time. The terminal shows the local URL.

To start it manually, run `npm run dev` in the project folder.

For a complete Hinglish walkthrough of the project, see [PROJECT_GUIDE_HINGLISH.md](./PROJECT_GUIDE_HINGLISH.md).

## Publishing on GitHub Pages

The GitHub repository shows the source code. To publish the website, enable **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow deploys the site whenever changes are pushed to `main`.

The published site will be available at:

https://amandanger222-create.github.io/vite-project-new/
