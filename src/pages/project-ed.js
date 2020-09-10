import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import ProjectImg from "../components/ProjectDetails/ProjectImg";
import ProjectNav from "../components/ProjectDetails/ProjectNav";

const ProjectEd = () => (
    <Layout>
        <SEO title="project ed." />
        <Banner bannerImg={require("../assets/images/ekport/ekport-thumbnail.jpg")} />
        <Stats
            title={"project ed."}
            brief={null}
            platform={"Web"}
            demo={"https://edisonko.design"}
            github={"https://github.com/fyeung21/edison-web"}
            tech={"React"}
        />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectNav />
    </Layout>
)

export default ProjectEd;