import Container from "../components/Container";
import PortfolioList from "../components/PortfolioList";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const workPosts = allPosts.filter((post) => post.type == "work");
  const funPosts = allPosts.filter((post) => post.type == "fun");

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
  const allPosts = await getAllPosts([
    "title",
    "type",
    "date",
    "slug",
    "tags",
    "content",
  ]);

  // console.log(allPosts);

  return {
    props: { allPosts },
  };
};
