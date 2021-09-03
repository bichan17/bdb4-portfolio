import React from "react";

import Container from "../components/Container";
import Layout from "../components/Layout";
import Head from "next/head";

import AboutPage from "../components/AboutPage";
const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Container>
        <AboutPage />
      </Container>
    </>
  );
};

export default About;
