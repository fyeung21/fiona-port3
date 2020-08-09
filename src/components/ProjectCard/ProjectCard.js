import React from "react";
// import { Link } from "gatsby";
import { StyledLink, StyledCard, MobileVer } from './cardStyles';
import Thumbnail from "./Thumbnail";
import CardInfo from "./CardInfo";

const ProjectCard = ({ github, img, title, desc, tags }) => {

    return (
        <StyledLink href={github} target="_blank" rel="noopener noreferrer">
            <StyledCard>
                <Thumbnail img={img} title={title} desc={desc} tags={tags} />
                <MobileVer>
                    <CardInfo title={title} desc={desc} tags={tags} />
                </MobileVer>
            </StyledCard>
        </StyledLink>
    );
}

export default ProjectCard;