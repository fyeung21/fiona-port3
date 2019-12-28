import React from "react"
import "./layout.css"
import Header from "./Header/Header"
import Hero from "./hero/hero"
import ProjectsContainer from "./Projects/ProjectsContainer"
import Skills from "./Skills/Skills"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Hero />
        <ProjectsContainer />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default Layout
