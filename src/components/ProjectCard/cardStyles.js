import styled from "styled-components";
import { theme } from "../../globalStyles";

export const StyledCard = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    :hover {
        opacity: 0.5;
    }
    @media (min-width: 1400px) {
        margin: 0;
    }
`

export const StyledHover = styled.div`
    position: absolute;
    z-index: 2;
`

export const StyledImg = styled.img`
    display: block;
    // height: 350px;
    width: 550px;
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
    color: ${theme.mainTxtColor};
    margin: 0.5rem 0;
`