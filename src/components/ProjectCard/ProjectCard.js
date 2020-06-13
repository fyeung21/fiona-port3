import React from "react";
import { Link } from "gatsby";
import { StyledCard, StyledImg } from './cardStyles';
import HoverDetails from "./HoverDetails";

const ProjectCard = (item) => {

    return (
        <Link to="/project-details">
            <StyledCard>
                <StyledImg
                    src={item.img}
                    alt="project screenshot"
                />
                <HoverDetails title={item.title} desc={item.desc} />
            </StyledCard>
        </Link>
    );
}

export default ProjectCard;