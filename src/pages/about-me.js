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
        <ProfileImg src={require("../assets/images/me-fullbody.jpg")} alt="me" />
      </Flex>
    </>
  </Layout>
)

const SectionHeading = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin-top: 5rem;
    font-size: 40px;
`
const Flex = styled.div`
    display: flex;
    margin: 3rem 0;
`
const ProfileImg = styled.img`
    height: 500px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px lightgrey;
`

export default AboutMe
