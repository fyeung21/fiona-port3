import styled from "styled-components";
import { theme } from "../Theme";

export const MainDetailsCont = styled.div`
    margin: 3rem auto;
    width:70%;
`

/////////////  Details 


export const BriefCont = styled.div`
    margin: 1rem;
`
export const ProjectTitle = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 4rem 1rem;
`
export const BriefType = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    text-transform: capitalize;
    margin: 1rem 0;
`
export const DetailsFlexCont = styled.div`
    display: flex;
`
export const TxtCont1 = styled.p`
    margin: 1rem 11rem 1rem 1rem;
`
export const TxtCont2 = styled.p`
    margin: 1rem 3rem 1rem 1rem;
`
export const DetailsFlex = styled.div`
    display:flex;
    align-items: baseline;
    margin: 1rem 0;
`
export const StatType = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 1rem 0 0;
`
export const Txt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 22px;
`
export const TxtLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentColor};
    text-transform: capitalize;
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
