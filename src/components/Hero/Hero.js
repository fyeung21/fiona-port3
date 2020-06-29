import React from "react"
import styled from "styled-components";
import { theme } from "../Theme";

const Hero = () => {
    return (
        <div>
            <BorderBox>
                <Name>Fiona Yeung</Name>
                <Title>Full-Stack Developer</Title>
            </BorderBox>
        </div>
    )
}

const BorderBox = styled.div`
    padding: 3rem 2rem;
    margin: 18rem auto 25rem;
    text-align: center;
    @media (min-width: 1025px) {
        padding: 5rem 2rem;
        width: 50%;
        border: 3px solid lightgrey;
        border-radius: 3px;
    }
`

const Name = styled.h1`
    font-family: ${theme.headingFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0.5rem 0;
`

const Title = styled.h3`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
`

export default Hero