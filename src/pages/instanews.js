import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import ProjectImg from "../components/ProjectDetails/ProjectImg";
import ProjectNav from "../components/ProjectDetails/ProjectNav";

const Instanews = () => (
    <Layout>
        <SEO title="Instanews" />
        <Banner bannerImg={require("../assets/images/instanews/instanews-thumbnail.png")} />
        <Stats
            title={"Instanews"}
            brief={null}
            platform={"Web"}
            demo={"https://fyeung21.github.io/Instanews-App/"}
            github={"https://github.com/fyeung21/Instanews-App"}
            tech={"CSS, JS"}
        />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectNav />
    </Layout>
)

export default Instanews;