import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainProjectsContainer from "../components/MainProjects/MainProjectsCont"
import SkillsContainer from "../components/Skills/SkillsContainer"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <MainProjectsContainer />
      <SkillsContainer />
    </div>
  </Layout>
)

export default Portfolio
