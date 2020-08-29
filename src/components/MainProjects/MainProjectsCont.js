import React from "react";
import { ProjectsCont, ProjectFlexCont, Text } from "./mainProjectStyles";
import projectsList from "../../assets/projectsList";
import ProjectCard from "../ProjectCard/ProjectCard";

const MainProjectsCont = () => {

    const reverseList = projectsList.slice().reverse()

    return (
        <ProjectsCont>
            <ProjectFlexCont>
                {reverseList.map(item => {
                    if (item.variant !== "Main") {
                        return null
                    }
                    return (
                        <ProjectCard
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            url={item.url}
                            github={item.github}
                            page={item.page}
                            tags={item.tags}
                        />
                    )
                })}
            </ProjectFlexCont>
            <Text>scroll right for more →</Text>
        </ProjectsCont>
    )
}

export default MainProjectsCont;