import React from "react";
import AboutBio from "./AboutBio";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const AboutCont = () => (
    <Section>
        <SectionHeading>about me</SectionHeading>
        <AboutBio />
    </Section>
);

const SectionHeading = styled.h1`
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.mainTxtColor};
    text-transform: capitalize;
    text-align: center;
`
const Section = styled.div`
    margin: 5rem 0 8rem;
    @media (min-width: 768px) {
        margin: 2.5rem 0 15rem;
    }
    @media (min-width: 1025px) {
        margin: 5rem 0 18rem;
    }
`

export default AboutCont;