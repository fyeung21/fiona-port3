import React from "react";
import projectsList from "../../assets/projectsList";
import { ProjectNavCont } from "./detailStyles";
import NavCard from "./NavCard";

const ProjectNav = () => {

    const reverseList = projectsList.slice().reverse()

    return (
        <ProjectNavCont>
            {reverseList.map(item => {
                if (item.variant !== "Main") {
                    return null
                }
                return (
                    <NavCard
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        page={item.page}
                    />
                )
            })}
        </ProjectNavCont>
    );
};

export default ProjectNav;