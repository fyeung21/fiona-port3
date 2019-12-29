import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero/Hero"
import ProjectsContainer from "../components/Projects/ProjectsContainer"
import Skills from "../components/Skills/Skills"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero />
      <ProjectsContainer />
      <Skills />
    </div>
  </Layout>
)

export default Portfolio
