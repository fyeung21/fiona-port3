import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ArchiveProjectsCont from "../components/ArchiveProjects/ArchiveProjectsCont"

const Archives = () => (
    <Layout>
        <SEO title="Archives" />
        <div>
            <ArchiveProjectsCont />
        </div>
    </Layout>
)

export default Archives