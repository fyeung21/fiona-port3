import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";
import projectsList from "../Projects/projectsList";
import ProjectTitle from "./ProjectTitle";

const ProjectNav = () => {
    return (
        <ProjectNavCont>
            {projectsList.map(item => {
                return (
                    <ProjectTitle
                        key={item.id}
                        title={item.title}
                    />
                )
            })}
        </ProjectNavCont>
    );
};

const ProjectNavCont = styled.div`
    width: 73%;
    margin: 7rem auto;
`

export default ProjectNav;