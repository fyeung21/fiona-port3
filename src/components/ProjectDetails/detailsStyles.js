import styled from "styled-components";
import { theme } from "../Theme";


/////////////  Stats Main Container 

export const StatsMainCont = styled.div`
    margin: 4rem 0;
`

/////////////  First Section of Stats (Project title & Brief)

export const ProjectTitle = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    letter-spacing: 1px;
    margin: 2rem 0;
`
export const BriefCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`
export const BriefType = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: lowercase;
    margin: 1rem 0;
`

/////////////  Second Section of Stats (Types)

export const SubFlexCont = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
    }
`
export const TypeCont = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: 200px;
`
export const Type = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: lowercase;
`
export const Txt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 300;
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 28px;
    margin: 0.5rem 0;
`
export const TxtLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentColor};
    line-height: 28px;
    margin: 0.5rem 0;

    :hover {
        color: ${({ theme }) => theme.hoverOnAccentColor};
    }
`

///////////////  Project Nav

export const ProjectNavCont = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 7rem 2rem 2rem;
    margin: 0 auto;

    @media (min-width: ${theme.tabletSize}) {
        padding: 10rem 2rem 2rem
    }
`
export const NavCardCont = styled.div`
    width: 350px;
    margin: 0 1rem;
`
export const NavImg = styled.img`
    height: 250px;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
    filter: grayscale(100%) brightness(${({ theme }) => theme.imgBrightness});
    transition: filter .5s linear;

    :hover {
        filter:grayscale(0%) brightness(${({ theme }) => theme.imgBrightness});
        transition: filter .08s linear;
    }

    @media (min-width: ${theme.skinnyWindowSize}) {
        height: 250px;
    }
    @media (min-width: ${theme.desktopSize}) {
        height: 250px;
    }
`
export const NavTitle = styled.a`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.headingFont};
    font-size: ${theme.h4FontSize};
    font-weight: 400;
    text-decoration: none;
    line-height: 60px;
    letter-spacing: 1px;
    padding: 0 0 0.15rem;
    margin: 0.75rem;
`
