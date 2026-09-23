import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, HeadContent, ScriptOnce, Scripts } from '@tanstack/react-router'
import NotFound from '@/components/fallback/not-found'
import TanStackDevtools from '@/components/tanstack/devtools'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/site'
import { SITE_KEYWORDS, siteJsonLd } from '@/lib/seo'
import { themeInitScript } from '@/lib/theme'
import appCss from '@/styles/tailwind.css?url'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => {
    const structuredData = siteJsonLd()
    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: SITE_TAGLINE },
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'keywords', content: SITE_KEYWORDS.join(', ') },
        { property: 'og:site_name', content: SITE_NAME },
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'icon', href: '/logos/oooyi-ui.svg', type: 'image/svg+xml' },
      ],
      scripts: structuredData
        ? [{ type: 'application/ld+json', children: JSON.stringify(structuredData) }]
        : [],
    }
  },
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-full flex-col">
        <ScriptOnce>{themeInitScript}</ScriptOnce>
        <div className="flex flex-1 flex-col">{children}</div>
        <TanStackDevtools />
        <Scripts />
      </body>
    </html>
  )
}
