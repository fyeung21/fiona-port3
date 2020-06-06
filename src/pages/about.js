import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutCont from "../components/About/AboutCont"

const About = () => (
    <Layout>
        <SEO title="Home" />
        <div>
            <AboutCont />
        </div>
    </Layout>
)

export default About