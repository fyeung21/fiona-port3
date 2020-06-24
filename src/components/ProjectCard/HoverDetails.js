import React from "react";
import { StyledHover, HoverTitle, HoverDesc, StackList, StackItem } from "./cardStyles";

const HoverDetails = ({ title, desc, tags }) => {

    const stack = tags;

    return (
        <StyledHover>
            <HoverTitle>{title}</HoverTitle>
            <HoverDesc>{desc}</HoverDesc>
            <StackList>
                {stack.map(item => {
                    return (
                        <StackItem>{`${item} `}</StackItem>
                    )
                })}
            </StackList>
        </StyledHover>
    );
}

export default HoverDetails;