import Container from "../../../components/container";
import PostBody from "../../../components/post-body";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import PostType from "../../../interfaces/post";
import { Metadata } from "next";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "tag",
    "content",
    "ogImage",
  ]);

  const post = {
    ...item,
    date: item.date,
  } as PostType;

  const title = `${post.title} | dx-junkyard`;

  return {
    metadataBase: new URL("https://acme.com"),
    title,
    openGraph: {
      title,
      description: post.content,
      images: [
        {
          url: post.ogImage.url,
        },
      ],
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const item = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "tag",
    "content",
    "ogImage",
  ]);

  const content = await markdownToHtml(item.content || "");

  const post = {
    ...item,
    date: item.date,
    content,
  } as PostType;

  return (
    <Container>
      <Header />
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.ogImage.url}
          date={post.date}
        />
        <PostBody content={post.content} />
      </article>
    </Container>
  );
}
