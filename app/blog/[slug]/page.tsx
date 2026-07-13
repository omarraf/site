import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog"
import { markdownToHtml } from "@/lib/markdown"
import { notFound } from "next/navigation"
import Link from "next/link"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <main className="page">
      <p>
        <Link href="/">← Omar Rafiq</Link>
      </p>

      <article>
        <h1 style={{ marginTop: "2rem" }}>{post.title}</h1>
        <p className="muted">{formatDate(post.date)}</p>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  )
}
