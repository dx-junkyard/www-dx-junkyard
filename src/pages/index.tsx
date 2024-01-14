import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "@/lib/api";
import Head from "next/head";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const ongoingProjects = allPosts.filter((post) => post.tag === "ongoing");
  const completeProjects = allPosts.filter((post) => post.tag === "complete");
  return (
    <>
      <Layout>
        <Head>
          <title>{`dx-junkyard`}</title>
        </Head>
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
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "tag",
    "excerpt",
    "ogImage",
  ]);

  return {
    props: { allPosts },
  };
};
