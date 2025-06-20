'use client';

import { notFound } from 'next/navigation';
import { blogPosts } from '../../data/blog-posts';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

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

        <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{post.title}</h1>
          <time className="text-sm text-muted-foreground mb-6 sm:mb-8 block">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-6 mb-3" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-3" {...props} />,
              p: ({ node, children }) => {
                const isFirstChildImage =
                  node?.children[0]?.type === 'element' &&
                  (node?.children[0]?.tagName === 'img' ||
                    (node?.children[0]?.tagName === 'a' &&
                      node?.children[0]?.children[0]?.type === 'element' &&
                      node?.children[0]?.children[0]?.tagName === 'img'));

                if (isFirstChildImage) {
                  return <>{children}</>;
                }
                return <p className="text-base sm:text-lg text-foreground mb-4 leading-relaxed">{children}</p>;
              },
              ul: ({ node, ...props }) => <ul className="list-disc list-inside text-foreground mb-4 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-foreground mb-4 space-y-2" {...props} />,
              li: ({ node, ...props }) => <li className="text-foreground" {...props} />,
              a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-border border border-border rounded-lg" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => <thead className="bg-muted" {...props} />,
              tbody: ({ node, ...props }) => <tbody className="divide-y divide-border" {...props} />,
              tr: ({ node, ...props }) => <tr className="hover:bg-muted/50" {...props} />,
              th: ({ node, ...props }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="px-4 py-3 text-sm text-foreground" {...props} />
              ),
              code: ({ inline, className, children, ...props }: CodeProps) => {
                if (inline) {
                  return (
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="text-sm font-mono text-foreground" {...props}>
                    {children}
                  </code>
                );
              },
              pre: ({ node, ...props }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
              ),
              img: ({ src = '', alt = '', title = '', width, height, ...props }) => (
                <figure className="my-6 flex flex-col items-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={width ? Number(width) : 700}
                    height={height ? Number(height) : 400}
                    className="rounded-lg shadow"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    {...props}
                  />
                  {title && (
                    <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                      {title}
                    </figcaption>
                  )}
                </figure>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
} 