import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";
import Pdf from "../../assets/FionaYeung-Resume.pdf";

const Resume = () => {
    return (
        <StyledBtn>
            <Text href={Pdf} target="_blank">Resume</Text>
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
    border: 5px solid ${theme.accentColor};
    border-radius: 10px;
    padding: 5px 10px;
    margin: 2rem 0;
    text-decoration: none;
    color: #000;
    &:hover {
        background-color: ${theme.accentColor};
    }
`

export default Resume;