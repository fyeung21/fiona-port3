import React from "react";
import { Link } from "gatsby";
import { MainCont } from "../globalStyles";
import { ProjectFlexCont, ProjectsCont } from "../MainProjects/mainProjectStyles";
import projectsList from "../../assets/projectsList";
import ProjectCard from "../ProjectCard/ProjectCard";
import styled from "styled-components";
import { theme } from "../Theme";

const MoreProjectsCont = () => {

    const reverseList = projectsList.slice().reverse()

    return (
        <MainCont>
            <Link to="/" style={linkStyle}>
                <NavText>back</NavText>
            </Link>
            <SectionTitle>a library of all of the projects I've worked on:</SectionTitle>
            <ProjectsCont>
                <ProjectFlexCont>
                    {reverseList.map(item => {
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
                </ProjectFlexCont>
            </ProjectsCont>
        </MainCont>
    )
}

const SectionTitle = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`

const linkStyle = {
    textDecoration: "none",
    color: "#000"
}

const NavText = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    padding: 0 0.5rem;
    margin: 1rem 0;
    text-transform: capitalize;

    &:hover {
        border-left: 3px solid ${({ theme }) => theme.accentColor};   
    }
`

export default MoreProjectsCont