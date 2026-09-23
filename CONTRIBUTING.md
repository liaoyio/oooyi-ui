# Contributing to ooOYi UI

ooOYi UI is a TanStack Start site and a [shadcn registry](https://ui.shadcn.com/docs/registry/github). Each registered component can be installed as source with the shadcn CLI.

## Local setup

```bash
pnpm install
pnpm dev
```

Use a Node.js version supported by the versions of Vite and TanStack Start in `package.json`.

## Add or change a component

1. Add or edit a named-export component in `src/components/ui/`. Use a kebab-case file name matching its registry item name.
2. Add or update its entry in the root `registry.json`. Declare every npm import under `dependencies`, and every registry item it imports under `registryDependencies`. Use the full same-repository address, for example `liaoyio/oooyi-ui/utils`.
3. If the component requires custom CSS, include it in both `src/styles/tailwind.css` for the gallery and the item's `css` field for consumers.
4. Add or update its data in `src/lib/components.ts` and its gallery route or preview in `src/routes/`.
5. Preserve the original Rare UI copyright and attribution when changing adapted code.

The registry entry's description should match its entry in `src/lib/components.ts`. See [CONVENTIONS.md](CONVENTIONS.md) for code and copy rules.

## Validate

```bash
pnpm typecheck
pnpm lint
pnpm build
```

`pnpm build` validates `registry.json` and builds the site. Check a representative component by installing it in a separate consumer project before publishing. The shadcn CLI address is:

```bash
npx shadcn@latest add liaoyio/oooyi-ui/<component-name>
```

The GitHub repository serves the source registry directly from `registry.json` and the component files. Push both after a change; there is no generated registry directory to commit. Deploying the site is a separate maintainer action.

## License

Contributions must respect the existing [LICENSE](LICENSE), including the Commons Clause and visible attribution to [Rare UI](https://rareui.com). The original copyright notice must remain in adapted files.
