export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "first-open-source-contribution",
    title: "Small Contribution, Sustainable Impact",
    description: "My first open source contribution to the Open Energy Dashboard",
    date: "2024-11-04",
    content: `

## Introduction
Next.js is a powerful React framework that makes building full-stack web applications simple and efficient.

## Why Next.js?

- Server-side rendering
- Static site generation
- API routes
- File-based routing
- Built-in CSS support

## Getting Started

1. Create a new project:
\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

2. Run the development server:
\`\`\`bash
cd my-app
npm run dev
\`\`\`

## Next Steps

- Learn about routing
- Explore API routes
- Understand data fetching
- Master deployment
    `
  },
]; 