import styled from "styled-components";
import { theme } from "../Theme";

export const MainDetailsCont = styled.div`
    margin: 3rem auto;
    width:70%;
`
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