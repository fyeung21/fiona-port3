import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import ProjectImg from "../components/ProjectDetails/ProjectImg";
import ProjectNav from "../components/ProjectDetails/ProjectNav";

const Inhabitent = () => (
    <Layout>
        <SEO title="Inhabitent" />
        <Banner bannerImg={require("../assets/images/inhabit/inhabit-thumbnail.jpg")} />
        <Stats
            title={"Inhabitent"}
            brief={"longer description, features ability to favourite sessions and has a short bio for each speaker as well a link to their wiki page"}
            platform={"Web"}
            demo={null}
            github={"https://github.com/fyeung21/Inhabitent-Site"}
            tech={"CSS, JS, WordPress"}
        />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectNav />
    </Layout>
)

export default Inhabitent;