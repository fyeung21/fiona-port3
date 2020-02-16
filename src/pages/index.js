import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero/Hero"
import ProjectsContainer from "../components/Projects/ProjectsContainer"
import SkillsContainer from "../components/Skills/SkillsContainer"
import Resume from "../components/Resume/Resume"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero />
      <ProjectsContainer />
      {/* <SkillsContainer /> */}
      <Resume />
    </div>
  </Layout>
)

export default Portfolio
