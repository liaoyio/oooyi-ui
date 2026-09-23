# ooOYi UI

ooOYi UI is a source-available gallery and shadcn registry of animated React components. The site uses TanStack Start, TanStack Router, Tailwind CSS, and Motion. Components are installed as source files into your project.

This project is adapted from [Rare UI](https://rareui.com) with separate redistribution authorization from its creator. The original copyright notice and [LICENSE](LICENSE) remain in place. Historical Rare UI testimonials and sponsors are not endorsements or sponsors of ooOYi UI.

## Install a component

Run the shadcn CLI in a project with `components.json`:

```bash
npx shadcn@latest add liaoyio/oooyi-ui/fluid-orb
```

Replace `fluid-orb` with another name from [registry.json](registry.json). The CLI installs component source, its declared dependencies, and the original license notice as `oooyi-ui-LICENSE.txt`. This is a source registry, not an `npm install oooyi-ui` package.

## Run locally

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000`. Component source lives in `src/components/ui`; route pages live in `src/routes`.

After changing a component or `registry.json`, regenerate the hosted registry payloads:

```bash
pnpm registry:build
pnpm build
```

For a deployed site, set `VITE_SITE_URL` to its public origin, such as the final HTTPS domain. Until it is set, canonical links and absolute JSON-LD URLs are omitted, and `/sitemap.xml` returns 404. The GitHub repository address is `https://github.com/liaoyio/oooyi-ui`; a public site domain has not yet been chosen.

The registry build, TypeScript check, production build, and local browser route checks passed. All registry items were installed from local generated JSON in an isolated consumer project. The public GitHub shorthand was also verified with `fluid-orb` in a fresh TanStack Start project; its TypeScript, client build, and SSR build passed.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for registry entries, component conventions, and validation.

## License and attribution

The original component code is covered by [LICENSE](LICENSE), which includes the Commons Clause and an attribution requirement. Projects shipping that code must credit [Rare UI](https://rareui.com) visibly and keep the original copyright notice. The maintainer's separate authorization to redistribute this project does not change downstream license conditions.
