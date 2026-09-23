import { createFileRoute } from '@tanstack/react-router'
import { PUBLIC_SITE_URL } from '@/lib/site'

const sitemapDirective = PUBLIC_SITE_URL ? `Sitemap: ${PUBLIC_SITE_URL}/sitemap.xml\n` : ''

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => new Response(
        `User-agent: *\nAllow: /\nDisallow: /api/\n${sitemapDirective}`,
        { headers: { 'content-type': 'text/plain; charset=utf-8' } },
      ),
    },
  },
})
