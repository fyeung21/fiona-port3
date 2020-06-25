import styled from "styled-components";
import { theme } from "../globalStyles";


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
export const Bio = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    text-align: left;
    line-height: 32px;
    @media (min-width: ${theme.tabletSize}) {
        text-align: center;
    }
`