import PostPreview from "./post-preview";
import type Post from "../types/post";

type Props = {
  title: string;
  posts: Post[];
};

const MoreStories = ({ title, posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            coverImage={post.ogImage.url}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
