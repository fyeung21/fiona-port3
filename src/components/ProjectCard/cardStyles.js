import styled from "styled-components";
import { theme } from "../Theme";

//////////////// Project Card Container

export const StyledCard = styled.div`
    position: relative;
    width: 340px;
    height: 415px;
    margin: 0 2rem 0 0;
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.cardShadow};
    background-color: ${({ theme }) => theme.cardBkgColor};

    @media (min-width: ${theme.tabletSize}) {
        width: 465px;
        height: 500px;
    }
    @media (min-width: ${theme.desktopSize}) {
        box-shadow: none;
        background-color: none;
        width: 550px;
        height: 325px;
        margin: 0 auto 4rem;
    }
`

export const StyledLink = styled.a`
    text-decoration: none;
`

//////////////// Thumbnail

export const StyledImgCont = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    width: 340px;
    height: 215px;

    @media (min-width: ${theme.tabletSize}) {
        width: 465px;
        height: 300px;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 550px;
        height: 325px;
    }
`

export const StyledImg = styled.img`
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 25px 25px 0 0;
    margin: 0 auto;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.imgBrightness});

    @media (min-width: ${theme.desktopSize}) {
        border-radius: 25px;
    }
`

//////////////// HoverCard

export const StyledHover = styled.div`
    display: none;

    @media (min-width: ${theme.desktopSize}) {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 6rem 4rem;
        background-color: ${({ theme }) => theme.cardHoverColor};
        opacity: 0;
        border-radius: 25px;
        transition: all 0.25s ease-in-out;

        :hover {
            opacity: 1;
            backdrop-filter: blur(4px);
            border-radius: 25px;
        }
    }  
`
//////////////// Card Info

export const CardTitle = styled.p`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin: 0 0 0.5rem;
`
export const CardDesc = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 300;
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
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 400;
    margin: 0 1rem 0 0;

    :last-child {
        margin: 0;
    }
`

//////////////// Container for Mobile Ver's Card Info

export const MobileVer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem;

    @media (min-width: ${theme.tabletSize}) {
        padding: 2rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        display: none;
    }
`