import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

const ProjectNavTitle = (item) => {
    return (
        <>
            <Title>{item.title}</Title>//
        </>
    );
};

const Title = styled.a`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.mainTxtColor};
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 5px;
    line-height: 60px;
    letter-spacing: 1px;
    padding: 0.75rem 1.25rem;
    margin: 0.75rem;
    &:hover {
        background-color: ${theme.accentColor};
        color: ${theme.invertTxtColor};
        cursor: pointer;
    }
`

export default ProjectNavTitle;