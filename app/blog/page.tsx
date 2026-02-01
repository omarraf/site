import { Navigation } from "@/components/navigation"
import { getAllPosts, formatDate } from "@/lib/blog"
import Link from "next/link"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-medium mb-12">blog</h1>

        {posts.length === 0 ? (
          <div className="text-gray-500 text-center py-12">
            <p>No blog posts published yet.</p>
            <p className="text-sm mt-2">
              Add markdown files to <code className="bg-gray-100 px-1 rounded">content/blog/</code> to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug}>
                <h2 className="text-lg font-medium mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-red-500 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-4">{formatDate(post.date)}</p>
                <p className="text-gray-700 leading-relaxed">
                  {post.excerpt}
                </p>
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
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
