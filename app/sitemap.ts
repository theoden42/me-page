

export const baseUrl = 'https://theoden42.github.io/me-page'

export default async function sitemap() {
  let routes = ['', ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
