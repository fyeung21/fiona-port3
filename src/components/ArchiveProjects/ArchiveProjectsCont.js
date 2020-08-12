import React from "react";
import { Link } from "gatsby";
import { MainCont, linkStyle } from "../globalStyles";
import { ProjectFlexCont, ProjectsCont } from "../MainProjects/mainProjectStyles";
import { BackTxt, Text } from "./archiveStyles";
import projectsList from "../../assets/projectsList";
import ProjectCard from "../ProjectCard/ProjectCard";

const MoreProjectsCont = () => {

    const reverseList = projectsList.slice().reverse()

    return (
        <MainCont>
            <Link to="/" style={linkStyle}>
                <BackTxt>back</BackTxt>
            </Link>
            <Text>A library of all of the projects I've worked on:</Text>
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

export default MoreProjectsCont