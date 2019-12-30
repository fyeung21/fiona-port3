import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="about me" />
    <div>
      <h1 style={{ margin: "3rem 5rem", textAlign: "center" }}>About Me</h1>
      <div style={{ display: "flex" }}>
        <div style={{
          maxWidth: "50%",
          marginRight: "2rem",
          borderRadius: "5px",
          width: "100%",
          height: "400px",
          marginTop: "3rem"
        }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo omnis harum error ratione
            delectus
            dolor quod accusantium voluptatum, hic voluptates optio sunt culpa aspernatur illum suscipit.
            Molestias,
            voluptatibus numquam.
          </p>
          <a href="../../images/resume.pdf" style={{ textTransform: "capitalize", textDecoration: "none", color: "lightblue" }}>
            <h3 style={{
              border: "2px solid lightblue",
              borderRadius: "35px",
              width: "141px",
              padding: "10px 20px",
              margin: "2rem auto"
            }}>resume</h3>
          </a>
        </div>
        <img src="../img.png" loading="lazy" alt="me" />
      </div>
    </div>
  </Layout>
)

export default AboutMe
