import { createFileRoute } from '@tanstack/react-router'
import { components } from '@/lib/components'
import { PUBLIC_SITE_URL } from '@/lib/site'

const fixedPaths = [
  '/',
  '/components',
  '/testimonials',
  '/sponsors',
  '/privacy',
  '/terms',
]

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        if (!PUBLIC_SITE_URL) {
          return new Response(null, { status: 404 })
        }
        const paths = [...fixedPaths, ...components.map(component => component.href)]
        const urls = [...new Set(paths)].map(path => `  <url><loc>${PUBLIC_SITE_URL}${path === '/' ? '' : path}</loc></url>`)
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          '</urlset>',
        ].join('\n')
        return new Response(xml, {
          headers: { 'content-type': 'application/xml; charset=utf-8' },
        })
      },
    },
  },
})
