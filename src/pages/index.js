import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainProjectsCont from "../components/MainProjects/MainProjectsCont"
import SkillsContainer from "../components/Skills/SkillsContainer"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <MainProjectsCont />
      <SkillsContainer />
    </div>
  </Layout>
)

export default Portfolio
