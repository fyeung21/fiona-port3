import React from "react"
import styled, { ThemeProvider } from "styled-components";

const theme = {
    font: "sans-serif",
    // primary: "#333",
    // secondary: "#999"
};

const Hero = () => {
    return (
        <div>
            <BorderBox>
                <NameTitle>Fiona Yeung</NameTitle>
                <Desc>Full-Stack Developer</Desc>
            </BorderBox>
        </div>
    )
}

const BorderBox = styled.div`
    padding: 5rem 2rem;
    margin: 11rem auto;
    width: 50%;
    border: 3px solid lightgrey;
    border-radius: 3px;
    text-align: center;
`

const NameTitle = styled.h1`
    font-size: 30px;
    margin: 0.5rem 0;
`

const Desc = styled.h3`
    font-size: 26px;
`

export default Hero