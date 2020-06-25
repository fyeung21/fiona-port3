import React from "react";
import { StyledHover } from "./cardStyles";
import CardInfo from "./CardInfo";

const HoverCard = ({ title, desc, tags }) => {
    return (
        <StyledHover>
            <CardInfo title={title} desc={desc} tags={tags} />
        </StyledHover>
    );
}

export default HoverCard;