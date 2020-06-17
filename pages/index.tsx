import Container from "../components/Container";
import PortfolioList from "../components/PortfolioList";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { getPostsByType } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  workPosts: Post[];
  funPosts: Post[];
};

const Index = ({ workPosts, funPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Eric Bichan</title>
        </Head>
        <Container>
          <Intro />
          {workPosts.length > 0 && (
            <PortfolioList title="Work" posts={workPosts} />
          )}
          {funPosts.length > 0 && (
            <PortfolioList title="Fun Stuff" posts={funPosts} />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const workPosts = await getPostsByType("work", [
    "title",
    "date",
    "slug",
    "tags",
    "content",
    "published",
  ]);
  const funPosts = await getPostsByType("fun", [
    "title",
    "date",
    "slug",
    "tags",
    "content",
    "published",
  ]);

  // console.log(allPosts);

  return {
    props: { workPosts, funPosts },
  };
};
