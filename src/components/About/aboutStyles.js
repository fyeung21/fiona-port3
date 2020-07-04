import styled from "styled-components";
import { theme } from "../Theme";


export const AboutSection = styled.div`
    margin: 5rem 0 8rem;
    @media (min-width: ${theme.tabletSize}) {
        margin: 5rem 0 27rem;
    }
`

//////////////////////

export const TextCont = styled.div`
    margin: 0 auto;
    @media (min-width: ${theme.desktopSize}) {
        max-width: 80%;
    }
`
export const Location = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    width: 90%;
    margin: 3rem auto 3rem;
    text-align: center;
    line-height: 32px;
`

export const Bio = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    width: 90%;
    margin: 0 auto;
    text-align: left;
    text-indent: 50px;
    line-height: 32px;
`