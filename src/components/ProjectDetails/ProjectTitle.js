import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const ProjectTitle = (item) => {
    return (
        <>
            <Title>{item.title}</Title>//
        </>
    );
};

const Title = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: black;
    text-decoration: none;
    margin: 1rem;
    text-transform: capitalize;
    &:hover {
        background-color: ${theme.onHoverColor};
    }
`

export default ProjectTitle;