import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutBio from "../components/About/AboutBio";

const AboutMe = () => (
  <Layout>
    <SEO title="about me" />
    <>
      <SectionHeading>about me</SectionHeading>
      <Flex>
        <AboutBio />
      </Flex>
    </>
  </Layout>
)

const SectionHeading = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin: 5rem 0;
    font-size: 40px;
`
const Flex = styled.div`
    display: flex;
    margin: 3rem 5rem;
`

export default AboutMe
