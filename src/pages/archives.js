import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MoreProjectsCont from "../components/MoreProjects/MoreProjectsCont"

const Archives = () => (
    <Layout>
        <SEO title="Home" />
        <div>
            <MoreProjectsCont />
        </div>
    </Layout>
)

export default Archives