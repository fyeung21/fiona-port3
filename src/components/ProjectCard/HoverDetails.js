import React from "react";
import { Heading, StyledHover } from "./cardStyles";

const HoverDetails = ({ title, desc }) => {
    return (
        <StyledHover>
            <Heading>{title}</Heading>
            <Heading>{desc}</Heading>
        </StyledHover>
    );
}

export default HoverDetails;