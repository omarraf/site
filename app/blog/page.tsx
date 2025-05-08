import Link from 'next/link';
import { blogPosts } from '../data/blog-posts';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Blog Posts</h1>
        <div className="grid gap-4 sm:gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block p-4 sm:p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{post.description}</p>
              <time className="text-xs sm:text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 