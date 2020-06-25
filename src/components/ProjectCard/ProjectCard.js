import React from "react";
// import { Link } from "gatsby";
import { StyledLink, StyledCard, StyledImgCont, StyledImg, MobileVer, } from './cardStyles';
import HoverCard from "./HoverCard";
import CardInfo from "./CardInfo";

const ProjectCard = (item) => {

    return (
        <StyledLink href={item.github} target="_blank" rel="noopener noreferrer">
            <StyledCard>
                <StyledImgCont>
                    <StyledImg
                        src={item.img}
                        alt="project screenshot"
                    />
                    <HoverCard title={item.title} desc={item.desc} tags={item.tags} />
                </StyledImgCont>
                <MobileVer>
                    <CardInfo title={item.title} desc={item.desc} tags={item.tags} />
                </MobileVer>
            </StyledCard>
        </StyledLink>
    );
}

export default ProjectCard;