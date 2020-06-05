import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import projectsList from "./projectsList";
import { theme, SectionHeading } from "../../globalStyles";


const ProjectsContainer = () => {

    return (
        <>
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
            <Text>scroll right for more →</Text>
        </>
    )
}

export const StyledGrid = styled.div`
    display: flex;
    overflow-x: scroll;
    margin: 0 0 1rem 0;
    padding: 1rem 0 4rem 0;
    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5rem 1rem;
        overflow: visible;
    }
    @media (min-width: 1400px) {
        grid-gap: 5rem 3rem;
        margin: 4rem auto;
    }
`
const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: 16px;
    color: ${theme.bodyTextColor};
    font-style: italic;
    text-align: center;
    margin: 0 0 6rem 0;

    @media (min-width: 1200px) {
        display:none;
    }
`

export default ProjectsContainer