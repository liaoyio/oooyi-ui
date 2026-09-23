import { createFileRoute } from '@tanstack/react-router'
import { components, installCommand } from '@/lib/components'
import { PUBLIC_SITE_URL, SITE_NAME, SITE_REPO } from '@/lib/site'

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: () => {
        const entries = components.map((item) => {
          const lines = [`### ${item.name}`, '', `- Page: ${PUBLIC_SITE_URL ?? ''}${item.href}`]
          if (item.description) lines.push(`- Description: ${item.description}`)
          const install = installCommand(item)
          if (install) lines.push(`- Install: \`${install}\``)
          if (item.source) lines.push(`- Source: ${item.source}`)
          return lines.join('\n')
        })

        const body = [
          `# ${SITE_NAME}`,
          '',
          'A shadcn registry of animated React components built with Tailwind CSS and Motion.',
          '',
          'Install a component with the shadcn CLI:',
          '',
          '```bash',
          'npx shadcn@latest add liaoyio/oooyi-ui/<component-name>',
          '```',
          '',
          `Source: ${SITE_REPO}`,
          '',
          '## Components',
          '',
          entries.join('\n\n'),
          '',
          '## License',
          '',
          'See the repository LICENSE for attribution and redistribution terms.',
          '',
        ].join('\n')

        return new Response(body, {
          headers: { 'content-type': 'text/plain; charset=utf-8' },
        })
      },
    },
  },
})
