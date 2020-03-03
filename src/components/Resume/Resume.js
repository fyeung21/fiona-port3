import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const Resume = () => {
    return (
        <StyledBtn>
            <Text href="/">Resume</Text>
        </StyledBtn>
    )
}

const StyledBtn = styled.div`
    text-align:center;
    margin: 10rem 0;
`

const Text = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${theme.mainTxtColor};
    border: 5px solid lightblue;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 2rem 0;
    text-decoration: none;
    color: #000;
    &:hover {
        background-color: lightblue;
    }
`

export default Resume;