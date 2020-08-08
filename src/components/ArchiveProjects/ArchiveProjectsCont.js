import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "gatsby";
import projectsList from "../../assets/projectsList";
import { ProjectFlexCont } from "../MainProjects/mainProjectStyles";

const MoreProjectsCont = () => {

    const reverseList = projectsList.reverse()

    return (
        <div>
            <Link to="/" style={linkStyle}>
                <NavText>back</NavText>
            </Link>
            <SectionTitle>a library of all of the projects I've worked on:</SectionTitle>
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
        </div>
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
    font-style: italic;
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 5px;
    text-transform: capitalize;
    width:5%;
    &:hover {
        background-color: ${({ theme }) => theme.accentColor};
    }
`

export default MoreProjectsCont