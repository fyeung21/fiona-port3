import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Details from "../components/ProjectDetails/Details";
import Content from "../components/ProjectDetails/Content";
import ProjectNav from "../components/ProjectDetails/ProjectNav";
import { Container } from "../components/globalStyles";

const ProjectDetails = () => (
    <Layout>
        <SEO title="Project Details" />
        <Banner />
        <Container>
            <Details />
            <Content />
        </Container>
        <ProjectNav />
    </Layout>
)

export default ProjectDetails;