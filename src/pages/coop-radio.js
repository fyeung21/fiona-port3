import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import ProjectImg from "../components/ProjectDetails/ProjectImg";
import ProjectNav from "../components/ProjectDetails/ProjectNav";

const CoopRadio = () => (
    <Layout>
        <SEO title="Coop Radio" />
        <Banner bannerImg={require("../assets/images/coop/coop-thumbnail.png")} />
        <Stats
            title={"Coop Radio"}
            brief={null}
            platform={"Web"}
            github={"https://github.com/fyeung21/radio-ws1-2019"}
            tech={"CSS, JS, WordPress"}
        />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectNav />
    </Layout>
)

export default CoopRadio;