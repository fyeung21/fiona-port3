import React from "react";
import AboutBio from "./AboutBio";
import { SectionHeading } from "../globalStyles";
import { AboutSection } from "./aboutStyles";

const AboutCont = () => (
    <AboutSection>
        <SectionHeading>about me</SectionHeading>
        <AboutBio />
    </AboutSection>
);

export default AboutCont;