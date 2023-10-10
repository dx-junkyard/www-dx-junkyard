type PostType = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  ongoing: boolean;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
