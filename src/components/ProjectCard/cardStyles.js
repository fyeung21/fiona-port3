import styled from "styled-components";
import { theme } from "../../globalStyles";

export const StyledCard = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    width: 550px;
    @media (min-width: 1400px) {
        margin: 0;
    }
`

export const StyledHover = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 4rem;
    background-color: rgba(75, 75, 75, 0.85);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    border-radius: 5px;
    :hover {
        opacity: 1;
    }
    
`

export const StyledImg = styled.img`
    display: block;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: 15px 15px 25px ${theme.shadowColor};
`
////////////////

export const Heading = styled.h3`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.invertTxtColor};
    margin: 0.5rem 0;
`