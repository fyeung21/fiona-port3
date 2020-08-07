import React from "react";
import AboutBio from "./AboutBio";
import { MainCont, SectionHeading } from "../globalStyles";

const AboutCont = () => (
    <MainCont>
        <SectionHeading>about me.</SectionHeading>
        <AboutBio />
    </MainCont>
);

export default AboutCont;