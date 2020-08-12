import styled from "styled-components";
import { theme } from "../Theme";

/////////////// Header Containers

export const HeaderBkgCont = styled.div`
    display: block;
    // position: sticky;
    z-index: 20;
    top: 0;
    padding: 1rem 0;
    // background-color: ${({ theme }) => theme.NavBkgColor};
    // backdrop-filter: blur(10px);
    // transition: all 0.50s linear;
`
export const HeaderSubCont = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
`

/////////////// Logo

export const HomeIcon = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: lowercase;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
`
export const Title = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentColor};
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 1px;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.smallLaptopSize}) {
        flex-direction: column;
    }
`

/////////////// Nav

export const NavCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${theme.tabletSize}) {
        align-items: center;
        margin: 0;
        width: 325px;
        text-align: center;
    }
    @media (min-width: ${theme.desktopSize}) {
        width: 340px;
    }
`
export const NavTxt = styled.p`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
        font-family: ${theme.headingFont};
        color: ${({ theme }) => theme.mainTxtColor};
        font-size: ${theme.h4FontSize};
        text-transform: lowercase;
        letter-spacing: 1px;
        line-height: 28px;

        &:hover {
            border-bottom: 3px solid ${({ theme }) => theme.accentColor};
        }
    }
`
export const NavTxtResume = styled.a`
    text-decoration: none;
`

/////////////// NavIcon Container

export const NavIconCont = styled.div`
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.mainTxtColor};

    :hover {
        color: ${({ theme }) => theme.accentColor};
    }
    :active {
        color: ${({ theme }) => theme.accentColor};
    }

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`
export const ItemCont = styled.div`
    display: flex;
    align-items: center;
`

/////////////// MobileVer for Hide/Show desktop Top Nav

export const MobileVer = styled.div`
    display: none;

    @media (min-width: ${theme.tabletSize}) {
        display: block;
    }
`

/////////////// BottomBar Container

export const BottomBarCont = styled.div`
    display: flex;
    position: sticky;
    z-index: 20;
    bottom: 0;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.NavBkgColor};
    backdrop-filter: blur(10px);
    border-top: 1px solid lightgrey;
    transition: all 0.50s linear;

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`