import React from "react";
import AboutBio from "./AboutBio";
import styled from "styled-components";
import { SectionHeading } from "../globalStyles";

const AboutCont = () => (
    <Section>
        <SectionHeading>about me</SectionHeading>
        <AboutBio />
    </Section>
);

const Section = styled.div`
    margin: 5rem 0 8rem;
    @media (min-width: 768px) {
        margin: 2.5rem 0 8rem;
    }
    @media (min-width: 1025px) {
        margin: 5rem 0 20rem;
    }
`

export default AboutCont;