import { Navigation } from "@/components/navigation"
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog"
import { markdownToHtml } from "@/lib/markdown"
import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <article>
          <header className="mb-8">
            <h1 className="text-2xl font-medium mb-4">{post.title}</h1>
            <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/blog"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Back to blog
          </a>
        </nav>
      </main>
    </div>
  )
}