import { createFileRoute } from '@tanstack/react-router'

const sources = import.meta.glob('../components/ui/*.tsx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export const Route = createFileRoute('/api/source')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const name = new URL(request.url).searchParams.get('name')
        if (!name || !/^[a-z0-9-]+$/.test(name)) {
          return new Response('Invalid component name.', { status: 400 })
        }

        const source = sources[`../components/ui/${name}.tsx`]
        if (!source) return new Response('Source not found.', { status: 404 })

        return new Response(source, {
          headers: { 'content-type': 'text/plain; charset=utf-8' },
        })
      },
    },
  },
})
