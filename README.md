# ooOYi UI

ooOYi UI is a source-available gallery and shadcn registry of animated React components. The site uses TanStack Start, TanStack Router, Tailwind CSS, and Motion. Components are installed as source files into your project.

This project is adapted from [Rare UI](https://rareui.com) with separate redistribution authorization from its creator. The original copyright notice and [LICENSE](LICENSE) remain in place. Historical Rare UI testimonials and sponsors are not endorsements or sponsors of ooOYi UI.

## Install a component

Run the shadcn CLI in a project with `components.json`:

```bash
npx shadcn@latest add liaoyio/oooyi-ui/fluid-orb
```

Replace `fluid-orb` with another name from [registry.json](registry.json). The CLI reads `registry.json` and the component source directly from GitHub, then installs the source, its declared dependencies, and the original license notice as `oooyi-ui-LICENSE.txt`. This is a source registry, not an `npm install oooyi-ui` package.

The site also serves a static HTTP registry at `/r/<component-name>.json` and `/r/registry.json`, as Rare UI did. `shadcn build` generates these files from the same source registry into `public/r/`. GitHub shorthand installs do not use those files; URL-based installs do.

## Run locally

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000`. `pnpm dev` generates `public/r/` before starting the server. Component source lives in `src/components/ui`; route pages live in `src/routes`.

To validate the registry and build the site:

```bash
pnpm build
```

`pnpm build` regenerates `public/r/` before building the site, so deployed HTTP registry files reflect the current source. The generated directory is ignored by Git; commit the source and `registry.json`, then deploy with the build script. GitHub installs read those committed source files directly. If a local component changes while `pnpm dev` is already running, restart the server to refresh the local `/r/*.json` output.

For a deployed site, set `VITE_SITE_URL` to its public origin, such as the final HTTPS domain. Until it is set, canonical links and absolute JSON-LD URLs are omitted, and `/sitemap.xml` returns 404. The GitHub repository address is `https://github.com/liaoyio/oooyi-ui`; a public site domain has not yet been chosen.

The registry validation, TypeScript check, production build, and local browser route checks passed. The public GitHub shorthand was verified with `fluid-orb` in a fresh TanStack Start project; its TypeScript, client build, and SSR build passed.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for registry entries, component conventions, and validation.

## License and attribution

The original component code is covered by [LICENSE](LICENSE), which includes the Commons Clause and an attribution requirement. Projects shipping that code must credit [Rare UI](https://rareui.com) visibly and keep the original copyright notice. The maintainer's separate authorization to redistribute this project does not change downstream license conditions.
