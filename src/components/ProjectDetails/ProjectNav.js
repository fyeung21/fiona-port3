import React from "react";
import styled from "styled-components";
import projectsList from "../../assets/projectsList";
import ProjectNavTitle from "./ProjectNavTitle";

const ProjectNav = () => {

    const reverseList = projectsList.reverse()

    return (
        <ProjectNavCont>
            {reverseList.map(item => {
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
    width: 90%;
    margin: 7rem auto;
    text-align: center;
`

export default ProjectNav;