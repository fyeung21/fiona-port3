import React from "react";
import projectsList from "../../assets/projectsList";
import ProjectNavTitle from "./ProjectNavTitle";
import { ProjectNavCont } from "./detailsStyles";

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

export default ProjectNav;