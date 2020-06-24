import styled from "styled-components";
import { theme } from "../globalStyles";

export const StyledCard = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    width: 550px;
    height: 300px;
    @media (min-width: 1400px) {
        margin: 0;
    }
`

export const StyledImg = styled.img`
    display: block;
    height: 100%;
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

export const StyledHover = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 4rem;
    background-color: rgba(250, 250, 250, 0.85);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    border-radius: 5px;
    :hover {
        opacity: 1;
    }  
`
////////////////

export const HoverTitle = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.mainTxtColor};
    font-weight: 500;
    margin: 0.5rem 0 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    
`
export const HoverDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    margin: 0.5rem 0;
    line-height: 22px;
`
export const StackList = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 1rem 0;
`
export const StackItem = styled.li`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    font-weight: 600;
    margin: 0 1rem 0 0;    
`