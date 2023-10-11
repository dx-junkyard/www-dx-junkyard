export type Tag = "ongoing" | "complete";

type PostType = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: Tag;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
