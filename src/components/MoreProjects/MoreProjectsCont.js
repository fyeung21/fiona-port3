import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import styled from "styled-components";
import { Link } from "gatsby";
import moreProjectsList from "./moreList";

const MoreProjectsCont = () => {
    const reverseList = moreProjectsList.reverse()

    return (
        <div>
            <Link to="/" style={linkStyle}>
                <NavText>back</NavText>
            </Link>
            <SectionTitle>a library of all of the projects I've worked on:</SectionTitle>
            <StyledGrid>

                {reverseList.map(item => {
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

const SectionTitle = styled.p`
    font-size: 20px;
`
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6.5rem 4.5rem;
    margin: 5rem auto;
`
const linkStyle = {
    textDecoration: "none",
    color: "black"
}

const NavText = styled.p`
    font-size: 18;
    margin: 1rem 5px;
    text-transform: capitalize;
    width:5%;
    &:hover {
        background-color: lightblue;
    }
`

export default MoreProjectsCont