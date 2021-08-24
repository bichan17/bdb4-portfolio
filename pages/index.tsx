import Container from "../components/Container";
import PortfolioList from "../components/PortfolioList";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { getPostsByType } from "../lib/api";
import Head from "next/head";
import Post from "../@types/post";
import ToyScene from "../components/ToyScene";

type Props = {
  workPosts: Post[];
  // funPosts: Post[];
};

const Index = ({ workPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Eric Bichan</title>
        </Head>
        <Container>
          <Header />
          <Intro />
          {workPosts.length > 0 && (
            <PortfolioList title="Work" posts={workPosts} />
          )}
          <ToyScene />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const fields = ["title", "slug", "project_link", "tags", "content"];
  const workPosts = await getPostsByType("work", fields);
  // const funPosts = await getPostsByType("fun", fields);

  return {
    props: { workPosts },
  };
};
