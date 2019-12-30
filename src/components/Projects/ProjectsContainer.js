import React from "react"
import ProjectCard from "./ProjectCard"

let projectsList = [
    {
        id: 0,
        title: "Coop Radio",
        desc: "Custom theme for Vancouver Coop Radio's landing site for artists.",
        img: "../../assets/images/coop.png",
        url: "https://radio.van.cp.academy.red",
        github: "https://github.com/fyeung21/radio-ws1-2019",
        tags: ["Php", "JS", "WordPress"]

    },
    {
        id: 1,
        title: "Quotes on Dev",
        desc: "A simple site that cycles through an archive of quotes from devs on click.",
        img: "../../assets/images/qod.png",
        url: "#",
        github: "https://github.com/fyeung21/quotes-on-dev",
        tags: ["Ajax", "JS", "Php", "WordPress"]

    },
    {
        id: 2,
        title: "Inhabitent",
        desc: "A fictional camping supply website, complete with a blog and shop.",
        img: "../../assets/images/inhabit.png",
        url: "#",
        github: "https://github.com/fyeung21/Inhabitent-Site",
        tags: ["Php", "JS", "WordPress"]

    },
    {
        id: 3,
        title: "Instanews",
        desc: "A simple website that uses ajax to pull top stories from the New York Times.",
        img: "../../assets/images/instanews.png",
        url: "https://github.com/fyeung21/Instanews-App",
        github: "https://github.com/fyeung21/Instanews-App",
        tags: ["Ajax", "CSS", "JS"]

    },
    {
        id: 4,
        title: "Pong",
        desc: "The classic pong game using js and svgs with special game features.",
        img: "../../assets/images/pong.png",
        url: "https://fyeung21.github.io/pong-project/",
        github: "https://github.com/fyeung21/pong-project",
        tags: ["JS", "SVGs", "Node"]

    },
    {
        id: 5,
        title: "Aloha Apparel",
        desc: "A fictional clothing retail webpage. Utilized flickity.js plugin.",
        img: "../../assets/images/aloha.png",
        url: "https://fyeung21.github.io/Aloha-Webpage/",
        github: "https://github.com/fyeung21/Aloha-Webpage",
        tags: ["HTML", "CSS", "JS"]

    }
];

const ProjectsContainer = () => {

    return (
        <div>
            <h1 style={{ textTransform: "capitalize", textAlign: "center", marginTop: "5rem" }}>projects</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "6.5rem 4.5rem",
                margin: "5rem auto"
            }}>
                {projectsList.map(item => {
                    return (
                        <ProjectCard key={item.projectsList} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsContainer