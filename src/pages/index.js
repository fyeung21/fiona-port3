import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero/Hero"
import ProjectsContainer from "../components/Projects/ProjectsContainer"
import SkillsContainer from "../components/Skills/SkillsContainer"
import Resume from "../components/Resume/Resume"
import AboutCont from "../components/About/AboutCont"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero />
      {/* <AboutCont /> */}
      <ProjectsContainer />
      <SkillsContainer />
      <Resume />
    </div>
  </Layout>
)

export default Portfolio
