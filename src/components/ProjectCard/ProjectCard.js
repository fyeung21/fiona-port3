import React from "react";
// import { Link } from "gatsby";
import { StyledLink, StyledCard, StyledImgCont, StyledImg, MobileVer, } from './cardStyles';
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const ProjectCard = ({ github, img, title, desc, tags }) => {

    return (
        <StyledLink href={github} target="_blank" rel="noopener noreferrer">
            <StyledCard>
                <StyledImgCont>
                    <StyledImg
                        src={img}
                        alt="project screenshot"
                    />
                    <HoverCard title={title} desc={desc} tags={tags} />
                </StyledImgCont>
                <MobileVer>
                    <CardInfo title={title} desc={desc} tags={tags} />
                </MobileVer>
            </StyledCard>
        </StyledLink>
    );
}

export default ProjectCard;