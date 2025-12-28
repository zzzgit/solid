# Solid + Rsbuild (JavaScript)

A minimal SolidJS app using Rsbuild as the build tool (no TypeScript).

## Scripts

- dev: Start the dev server
- build: Production build to ./dist
- preview: Preview the built app

## Run

```sh
npm run dev
```

Dev server will print the local URL (typically http://localhost:2999 ).

## Build

```sh
npm run build
```

## Preview build

```sh
npm run preview
```

## Notes

- This project uses `@rsbuild/plugin-solid` with `@rsbuild/plugin-babel` to compile Solid JSX.
- All source files are plain JavaScript with JSX (`.jsx`).
- HTML template: `index.html`; App entry: `src/index.jsx`.

## tech stack
headless: ark 唯一選擇
with style: 
    park 不成熟
    material 不維護
