import React from "react";
import styled from "styled-components";
import { theme } from "../Theme";

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
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 5px;
    line-height: 60px;
    letter-spacing: 1px;
    padding: 0.75rem 1.25rem;
    margin: 0.75rem;
    &:hover {
        background-color: ${({ theme }) => theme.accentColor};
        color: ${({ theme }) => theme.invertTxtColor};
        cursor: pointer;
    }
`

export default ProjectNavTitle;