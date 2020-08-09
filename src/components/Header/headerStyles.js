import styled from "styled-components";
import { theme } from "../Theme";

/////////////// Header

export const HeaderBkgCont = styled.div`
    display: block;
    // position: sticky;
    z-index: 20;
    top: 0;
    padding: 1rem 0;
    // background-color: rgba(250, 250, 250, 0.70);
    // backdrop-filter: blur(10px);
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
`

/////////////// Nav

export const NavCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        justify-content: space-between;
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
    font-family: ${theme.headingFont};
    font-size: ${theme.h4FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: lowercase;
    letter-spacing: 1px;
    &:hover {
        font-weight: 600;
    }
    @media (min-width: ${theme.tabletSize}) {
        line-height: 28px;
        &:hover {
            border-bottom: 3px solid ${({ theme }) => theme.accentColor};
            font-weight: 400;
        }
    }
`
export const NavTxtResume = styled.a`
    font-family: ${theme.headingFont};
    font-size: ${theme.h4FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-decoration: none;
    text-transform: lowercase;
    letter-spacing: 1px;
    &:hover {
        font-weight: 600;
    }
    @media (min-width: ${theme.tabletSize}) {
        line-height: 28px;
        &:hover {
            border-bottom: 3px solid ${({ theme }) => theme.accentColor};
            font-weight: 400;
        }
    }
`

/////////////// NavIcon Container

export const NavIconCont = styled.div`
    display: none;
    
    color: ${({ theme }) => theme.mainTxtColor};

    :hover {
        color: ${({ theme }) => theme.hoverTxtColor};
    }
    :active {
        color: ${({ theme }) => theme.activeTxtColor};
    }

    @media (min-width: ${theme.tabletSize}) {
        display: none;
    }
`