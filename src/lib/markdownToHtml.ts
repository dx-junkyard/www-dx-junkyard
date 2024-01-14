import rehypeCodeTitles from "rehype-code-titles";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast の変換
    .use(remarkRehype, { allowDangerousHtml: true }) // mdast -> hast の変換
    .use(rehypeRaw)
    .use(rehypeCodeTitles)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .process(markdown); // 変換実行
  return result.toString();
}
