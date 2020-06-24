import React from "react";
// import { Link } from "gatsby";
import { StyledCard, StyledImg } from './cardStyles';
import HoverDetails from "./HoverDetails";

const ProjectCard = (item) => {

    return (
        <a href={item.github} target="_blank">
            <StyledCard>
                <StyledImg
                    src={item.img}
                    alt="project screenshot"
                />
                <HoverDetails title={item.title} desc={item.desc} tags={item.tags} />
            </StyledCard>
        </a>
    );
}

export default ProjectCard;