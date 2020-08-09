import React from "react";
import { StyledImgCont, StyledImg } from './cardStyles';
import HoverCard from "./HoverCard";

const Thumbnail = ({ img, title, desc, tags }) => {
    return (
        <StyledImgCont>
            <StyledImg
                src={img}
                alt="project screenshot"
            />
            <HoverCard title={title} desc={desc} tags={tags} />
        </StyledImgCont>
    );
}

export default Thumbnail;