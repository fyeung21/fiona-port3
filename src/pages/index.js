import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import Hero from "../components/Hero/Hero"
import MainProjectsContainer from "../components/MainProjects/MainProjectsCont"
import SkillsContainer from "../components/Skills/SkillsContainer"
// import Resume from "../components/Resume/Resume"

const Portfolio = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      {/* <Hero /> */}
      <MainProjectsContainer />
      <SkillsContainer />
      {/* <Resume /> */}
    </div>
  </Layout>
)

export default Portfolio
