import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import Content from "../components/ProjectDetails/Content";
import ProjectNav from "../components/ProjectDetails/ProjectNav";
import { Container } from "../components/globalStyles";

const ProjectDetails = () => (
    <Layout>
        <SEO title="Project Details" />
        <Banner />
        <Stats />
        <Content />
        <ProjectNav />
    </Layout>
)

export default ProjectDetails;