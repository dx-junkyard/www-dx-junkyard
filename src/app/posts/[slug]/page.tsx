import Container from "../../../components/container";
import PostBody from "../../../components/post-body";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import {getAllPosts, getPostBySlug} from "@/lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import PostType from "../../../types/post";
import { Metadata } from "next";

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'all';


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

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getAllPosts(["slug", "tag"])

  return posts
      .filter((post) => post.tag !== "draft")
      .map((post) => ({slug: `${post.slug}`,
  }))
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
