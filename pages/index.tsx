import Container from "../components/Container";
import PortfolioList from "../components/PortfolioList";
import Intro from "../components/Intro";
import { getPostsByType } from "../lib/api";
import Head from "next/head";
import Post from "../@types/post";

type Props = {
  workPosts: Post[];
};

const Index = ({ workPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Eric Bichan</title>
      </Head>
      <Container>
        <Intro />
        {workPosts.length > 0 && (
          <PortfolioList title="Work" posts={workPosts} />
        )}
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const fields = ["title", "slug", "project_link", "tags", "content"];
  const workPosts = await getPostsByType("work", fields);

  return {
    props: { workPosts },
  };
};
