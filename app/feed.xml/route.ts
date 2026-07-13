import { getAllPosts } from '@/lib/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omarrafiq.vercel.app'

export const dynamic = 'force-static'

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function GET() {
  const posts = getAllPosts()

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    )
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Omar Rafiq</title>
    <link>${SITE_URL}</link>
    <description>Writing by Omar Rafiq</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
