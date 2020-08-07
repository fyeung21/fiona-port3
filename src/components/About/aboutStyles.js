import styled from "styled-components";
import { theme } from "../Theme";

///////////////// About

export const TextCont = styled.div`
    margin: 0 auto;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0 auto 20rem;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        margin: 0 auto 10rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        margin: 0 auto 16rem;
    }
`
export const Location = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 3rem auto 1rem;
    text-align: left;
    line-height: 40px;
`

export const Bio = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0 auto;
    text-align: left;
    line-height: 40px;
`