# Conventions

How components and their docs are written in this repo. Follow these exactly.

## Copy style

- No em dashes anywhere: descriptions, prop tables, interaction text, code comments. Use a comma, colon, or semicolon instead.
- Short sentences. User-focused. No filler.
- Every number in the docs must match the code. Check the constants before writing one.

## Component entries in src/lib/components.ts

Each section has one job. Never repeat a fact across sections.

- `description`: one sentence saying what the component is. Never how it works.
- `interaction`: what the user can do and see, in a few short sentences. No implementation details, no prop explanations.
- `props`: one or two short sentences each. What it controls, plus the default behavior if it matters. Prop details live here and nowhere else.
- `usage`: a minimal runnable example. Comments only where something is non-obvious.

## Component code

- Comments are short lowercase one-liners, only where the code is non-obvious. No JSDoc narration.
- Shipped components in `src/components/ui/*` follow shadcn hygiene: `cn()` merged with a `className` prop, remaining props spread onto the root, `data-slot` on the root element.
- Interactive components honor `prefers-reduced-motion`.

## Workflow

- After changing anything in `src/components/ui/*` or `registry.json`, run `pnpm build` to validate the registry and the site. GitHub installs read these source files directly. The registry description must match the one in `src/lib/components.ts`.
- Verify with `pnpm typecheck` and `pnpm exec eslint` on the touched files before calling work done.
- Check affected pages in a local browser after route or shared UI changes. Verify that document navigation returns HTML and that interactive components work after hydration.
