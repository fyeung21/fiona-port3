import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { Link } from "gatsby";
import projectsList from "./projectsList";
import { theme } from "../../globalStyles";


const ProjectsContainer = () => {

    return (
        <div>
            <SectionHeading>projects</SectionHeading>
            <StyledGrid>
                {projectsList.map(item => {
                    return (
                        <ProjectCard
                            key={item.id}
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
    font-family: ${theme.bodyFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    text-align: center;
    margin-top: 5rem;
`
export const StyledGrid = styled.div`
    display: flex;
    overflow-x: scroll;
    margin: 5rem 0 2rem 0;
    padding: 0 0 6rem 0;
    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5rem 1rem;
        overflow-x: hidden;
    }
    @media (min-width: 1400px) {
        grid-gap: 5rem 2.5rem;
        margin: 4rem auto;
    }
`
const linkStyle = {
    textDecoration: "none",
    color: "black",
}

const NavText = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    margin: 1rem 5px;
    width:5%;
    &:hover {
        background-color: ${theme.onHoverColor};
    }
`

export default ProjectsContainer