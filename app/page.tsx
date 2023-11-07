import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

export const metadata = {
  title: `dx-junkyard`,
};

export default function Index() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "tag",
    "excerpt",
    "ogImage",
  ]).map((post) => {
    return {
      ...post,
      date: post.date,
    } as Post;
  });

  const ongoingProjects = allPosts.filter((post) => post.tag === "ongoing");
  const completeProjects = allPosts.filter((post) => post.tag === "complete");

  return (
    <Container>
      <Intro />
      {ongoingProjects.length > 0 && (
        <MoreStories title="実施中のプロジェクト" posts={ongoingProjects} />
      )}
      {completeProjects.length > 0 && (
        <MoreStories
          title="今まで実施したプロジェクト"
          posts={completeProjects}
        />
      )}
    </Container>
  );
}
