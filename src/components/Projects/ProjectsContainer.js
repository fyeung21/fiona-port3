import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

let projectsList = [
    {
        id: 0,
        title: "Coop Radio",
        desc: "Custom theme for Vancouver Coop Radio's landing site for artists.",
        img: require("../../assets/images/coop.png"),
        url: "https://radio.van.cp.academy.red",
        github: "https://github.com/fyeung21/radio-ws1-2019",
        tags: ["Php", "JS", "WordPress"]

    },
    {
        id: 1,
        title: "Quotes on Dev",
        desc: "A simple site that cycles through an archive of quotes from devs on click.",
        img: require("../../assets/images/qod.png"),
        url: null,
        github: "https://github.com/fyeung21/quotes-on-dev",
        tags: ["Ajax", "JS", "Php", "WordPress"]

    },
    {
        id: 2,
        title: "Inhabitent",
        desc: "A fictional camping supply website, complete with a blog and shop.",
        img: require("../../assets/images/inhabit.png"),
        url: null,
        github: "https://github.com/fyeung21/Inhabitent-Site",
        tags: ["Php", "JS", "WordPress"]

    },
    {
        id: 3,
        title: "Instanews",
        desc: "A simple website that uses ajax to pull top stories from the New York Times.",
        img: require("../../assets/images/instanews.png"),
        url: "https://github.com/fyeung21/Instanews-App",
        github: "https://github.com/fyeung21/Instanews-App",
        tags: ["Ajax", "CSS", "JS"]

    },
    {
        id: 4,
        title: "Pong",
        desc: "The classic pong game using js and svgs with special game features.",
        img: require("../../assets/images/pong.png"),
        url: "https://fyeung21.github.io/pong-project/",
        github: "https://github.com/fyeung21/pong-project",
        tags: ["JS", "SVGs", "Node"]

    },
    {
        id: 5,
        title: "Aloha Apparel",
        desc: "A fictional clothing retail webpage. Utilized flickity.js plugin.",
        img: require("../../assets/images/aloha.png"),
        url: "https://fyeung21.github.io/Aloha-Webpage/",
        github: "https://github.com/fyeung21/Aloha-Webpage",
        tags: ["HTML", "CSS", "JS"]

    }
];

const ProjectsContainer = () => {

    return (
        <div>
            <SectionHeading>projects</SectionHeading>
            <StyledGrid>
                {projectsList.map(item => {
                    return (
                        <ProjectCard
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            url={item.url}
                            github={item.github}
                            tags={item.tags}
                        />
                    )
                })}
            </StyledGrid>
        </div>
    )
}

const SectionHeading = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin-top: 5rem;
    font-size: 40px;
`
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6.5rem 4.5rem;
    margin: 5rem auto;
`

export default ProjectsContainer