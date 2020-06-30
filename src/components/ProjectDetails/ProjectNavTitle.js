import React from "react";
import { NavTitleCont, Title, Spacer } from "./detailsStyles";

const ProjectNavTitle = (item) => {
    return (
        <NavTitleCont>
            <Title>{item.title}</Title>
            <Spacer>//</Spacer>
        </NavTitleCont>
    );
};

export default ProjectNavTitle;