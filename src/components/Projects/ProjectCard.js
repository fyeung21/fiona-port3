import React from "react";
import { Link } from "gatsby";
import {
    StyledCard,
    StyledImg,
} from './cardStyles';
import HoverDetails from './HoverDetails';
import useHover from '../hooks/useHover';

const ProjectCard = (item) => {

    // const [ref, hovered] = useHover();

    return (
        <Link to="/project-details">
            <StyledCard>
                <StyledImg
                    src={item.img}
                    alt="project screenshot"
                />
                {/* {hovered && <HoverDetails />} */}
            </StyledCard>
        </Link>
    );
}

export default ProjectCard;