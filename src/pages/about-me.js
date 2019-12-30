import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="about me" />
    <div>
      <h1 style={{ margin: "3rem 5rem", textAlign: "center" }}>About Me</h1>
      <div style={{ display: "flex" }}>
        <p style={{
          maxWidth: "50%",
          marginRight: "2rem",
          borderRadius: "5px",
          width: "100%",
          height: "400px",
          marginTop: "3rem"
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo omnis harum error ratione
          delectus
          dolor quod accusantium voluptatum, hic voluptates optio sunt culpa aspernatur illum suscipit.
          Molestias,
          voluptatibus numquam.
    </p>
        <img src="../img.png" loading="lazy" alt="me" />
      </div>
    </div>
  </Layout>
)

export default AboutMe
