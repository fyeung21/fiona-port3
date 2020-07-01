import styled from "styled-components";
import { theme } from "../Theme";

export const StyledCard = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    width: 400px;
    height: 480px;
    border-radius: 5px;
    box-shadow: 15px 15px 25px ${({ theme }) => theme.shadowColor};
    background-color: ${({ theme }) => theme.cardBkgColor};
    @media (min-width: ${theme.tabletSize}) {
        width: 550px;
        height: 495px;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 550px;
        height: 300px;
        background-color: none;
        margin: 0 auto;
    }
`

export const StyledImgCont = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    width: 400px;
    height: 275px;
    @media (min-width: ${theme.tabletSize}) {
        width: 550px;
        height: 300px;
    }
    @media (min-width: ${theme.widescreenSize}) {
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
    border-radius: 5px 5px 0 0;
    margin: 0 auto;
    @media (min-width: ${theme.desktopSize}) {
        border-radius: 5px;
    }
`

export const MobileVer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    @media (min-width: ${theme.desktopSize}) {
        display: none;
    }
`
export const StyledLink = styled.a`
    text-decoration: none;
`

export const StyledHover = styled.div`
    display: none;
    border-radius: 5px;
    @media (min-width: ${theme.desktopSize}) {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 4rem;
        background-color: ${({ theme }) => theme.cardHoverColor};
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }  
`
////////////////

export const CardTitle = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    margin: 0.5rem 0 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    
`
export const CardDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
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
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 600;
    margin: 0 1rem 0 0;    
`