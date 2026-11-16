# Lore Burrow

SvelteKit application using Svelte 5, TypeScript, and Vite, with ESLint, Prettier,
and Vitest configured.

## Development

Use Node.js 24 LTS and npm. Install the locked dependencies and start the dev server:

```sh
npm ci
npm run dev
```

Application routes live in `src/routes`; shared code lives in `src/lib` and can be
imported with the `#lib` alias. Public files belong in `static`.

## Checks

```sh
npm run check
npm run lint
npm test
npm run build
```

Run checks and builds sequentially because they regenerate SvelteKit files.
Use `npm run format` to apply formatting.

The starter demo tests have been removed. `npm test` succeeds when no tests exist.
Vitest remains configured for Node unit tests (`src/**/*.test.ts` or `*.spec.ts`)
and Svelte browser tests (`src/**/*.svelte.test.ts` or `*.svelte.spec.ts`).
Browser tests use Playwright Chromium; install it with `npx playwright install chromium`
when adding component tests.

## Production

```sh
npm run build
npm run preview
```

The project uses `adapter-auto`. Choose a deployment adapter for the target hosting
platform before deploying.
