import React from "react";
import { Link } from "gatsby";
import { StyledCard, StyledImg } from './cardStyles';

const ProjectCard = (item) => {

    return (
        <Link to="/project-details">
            <StyledCard>
                <StyledImg
                    src={item.img}
                    alt="project screenshot"
                />
            </StyledCard>
        </Link>
    );
}

export default ProjectCard;