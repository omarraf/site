import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
