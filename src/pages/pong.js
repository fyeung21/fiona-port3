import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import ProjectImg from "../components/ProjectDetails/ProjectImg";
import ProjectNav from "../components/ProjectDetails/ProjectNav";

const Pong = () => (
    <Layout>
        <SEO title="Pong" />
        <Banner bannerImg={require("../assets/images/pong/pong-thumbnail.jpg")} />
        <Stats
            title={"Pong"}
            brief={"longer description, features ability to favourite sessions and has a short bio for each speaker as well a link to their wiki page"}
            platform={"Web"}
            demo={"https://fyeung21.github.io/pong-project/"}
            github={"https://github.com/fyeung21/pong-project"}
            tech={"JS, NodeJS"}
        />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectNav />
    </Layout>
)

export default Pong;