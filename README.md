# pptmute — Local presentation app

This project is a React + Vite presentation.

Quick local dev:

```powershell
cd c:\Users\Lenovo\Downloads\pptmute
npm install
npm run dev
```

Build (locally):

```powershell
npm run build
```

Vercel deployment notes

- If you saw an error like "sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied" during Vercel build, there are two reliable fixes:
  1. Use the `build` script to run Vite through `node` (this repo uses that approach):
     ```json
     "build": "node ./node_modules/vite/bin/vite.js build"
     ```
  2. Alternatively, ensure `vite` is installed and executable on the build machine by installing devDependencies during build. In Vercel settings you can set the install command to `npm install --include=dev` or set the environment variable `NPM_CONFIG_PRODUCTION=false`.

- If you prefer, move Vite from `devDependencies` to `dependencies` so it is always installed in production installs.

If you want, I can also add a `vercel.json` with an `installCommand` to ensure devDependencies are installed during build.
