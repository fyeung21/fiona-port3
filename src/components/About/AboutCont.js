import React from "react";
import AboutBio from "./AboutBio";
import styled from "styled-components";

const AboutCont = () => (
    <Section>
        <SectionHeading>about me</SectionHeading>
        <AboutBio />
    </Section>
);

const SectionHeading = styled.h1`
    text-transform: capitalize;
    text-align: center;
    // margin: 5rem 0;
    font-size: 40px;
`
const Section = styled.div`
    margin: 5rem 0 18rem;
`

export default AboutCont;