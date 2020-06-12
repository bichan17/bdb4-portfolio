import Container from "../components/Container";
import PortfolioList from "../components/PortfolioList";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Eric Bichan</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <PortfolioList posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = await getAllPosts(["title", "date", "slug", "content"]);

  console.log(allPosts);

  return {
    props: { allPosts },
  };
};
