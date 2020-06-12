import React from "react";
import styled from "styled-components";
import projectsList from "../../assets/projectsList";
import ProjectNavTitle from "./ProjectNavTitle";

const ProjectNav = () => {
    return (
        <ProjectNavCont>
            {projectsList.map(item => {
                if (item.variant !== "Main") {
                    return null
                }
                return (
                    <ProjectNavTitle
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