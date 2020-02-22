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
        <ProfileImg src={require("../assets/images/me-fullbody.jpg")} alt="picture-of-me" />
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
const ProfileImg = styled.img`
    height: 600px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px lightgrey;
    margin: 0 0 5rem 8rem;
`

export default AboutMe
