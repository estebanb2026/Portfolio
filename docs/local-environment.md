# Local environment (stable defaults)

This project pins **Node 20** (see `.nvmrc`). Use `nvm use`, `fnm use`, or `asdf install` so your shell matches before `npm install`.

## Always start the app this way

Use **`npm run dev`** from the project root. That runs `check-node.cjs`, then **`next dev`** on port 3000. It is fine to run **`next dev` / `npx next dev` directly** — the dev server builds its own cache; you do **not** need to run `next build` first.

**`npm run start`** (production) runs **`prepare-start.cjs`** first: if `.next` is missing or corrupted, it runs **`next build`** once so `next start` has a complete output.

## If the dev server breaks

Typical symptoms:

- **`Cannot find module '.../middleware-manifest.json'`** — stale `.next`. Run **`npm run clean`**, then **`npm run dev`** again.
- **`Cannot find module './NNN.js'`** (Webpack chunk) — **`npm run clean`** then **`npm run dev`**.
- **HTTP 500** after switching between dev and prod, or after a failed compile — **`npm run clean && npm run dev`**.

Still stuck: `npm run clean && npm install && npm run repair && npm run dev`

## Scripts

| Command | What it does |
|--------|----------------|
| `npm run dev` | Node check → `next dev` on port 3000 |
| `npm run repair` | `clean` + production `build` — use when `.next` is badly broken |
| `npm run clean` | Deletes `.next` and `node_modules/.cache` |
| `npm run preview` | `build` + `start` (production mode locally) |

Prefer **`npm run dev`** over **`npm run dev:turbo`** if you see flaky tooling (Turbopack is a separate toolchain).

## npm warning: `Unknown env config "devdir"`

That comes from a **global** npm setting on your machine, not this repo. Clear it with: `npm config delete devdir`
