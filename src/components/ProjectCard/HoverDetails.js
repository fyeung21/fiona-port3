import React from "react";
import { StyledHover, HoverTitle, HoverDesc } from "./cardStyles";

const HoverDetails = ({ title, desc }) => {
    return (
        <StyledHover>
            <HoverTitle>{title}</HoverTitle>
            <HoverDesc>{desc}</HoverDesc>
        </StyledHover>
    );
}

export default HoverDetails;