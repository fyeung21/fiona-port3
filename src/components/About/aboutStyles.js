import styled from "styled-components";
import { theme } from "../Theme";

//////////////////////

export const TextCont = styled.div`
    margin: 0 auto 12rem;
`
export const Location = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 3rem auto 3rem;
    text-align: center;
    line-height: 32px;
`

export const Bio = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 0 auto;
    text-align: left;
    text-indent: 50px;
    line-height: 32px;
`