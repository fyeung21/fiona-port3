import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/ProjectDetails/Banner";
import Stats from "../components/ProjectDetails/Stats";
import ProjectImg from "../components/ProjectDetails/ProjectImg";
import ProjectNav from "../components/ProjectDetails/ProjectNav";

const R10 = () => (
    <Layout>
        <SEO title="R10" />
        <Banner bannerImg={require("../assets/images/r10/r10collage.jpg")} />
        <Stats
            title={"R10"}
            brief={"longer description, features ability to favourite sessions and has a short bio for each speaker as well a link to their wiki page"}
            platform={"Mobile"}
            demo={null}
            github={"https://github.com/fyeung21/r10-app"}
            tech={"React Native, GraphQL"}
        />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectImg projectImg={"https://via.placeholder.com/650x450/d3d3d3"} />
        <ProjectNav />
    </Layout>
)

export default R10;