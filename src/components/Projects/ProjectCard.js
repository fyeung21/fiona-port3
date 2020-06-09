import React from "react";
import { Link } from "gatsby";
import {
    StyledCard,
    StyledImg,
} from './cardStyles';
import HoverDetails from './HoverDetails';

const ProjectCard = (item) => {

    const AddHoverDetails = () => {
        return (
            <HoverDetails />
        );
    };

    return (
        <Link to="/project-details">
            <StyledCard>
                <div onHover={AddHoverDetails}>
                    <StyledImg
                        src={item.img}
                        alt="project screenshot"
                    />
                </div>
                <HoverDetails />
            </StyledCard>
        </Link>
    );
}

export default ProjectCard;