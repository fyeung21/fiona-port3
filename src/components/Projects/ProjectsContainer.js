import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { Link } from "gatsby";
import projectsList from "./projectsList";


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
            <Link to="/archives" style={linkStyle}>
                <NavText>more...</NavText>
            </Link>
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
const linkStyle = {
    textDecoration: "none",
    color: "black",
}

const NavText = styled.p`
    font-size: 18;
    margin: 1rem 5px;
    width:5%;
    &:hover {
        background-color: lightblue;
    }
`

export default ProjectsContainer