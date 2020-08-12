import styled from "styled-components";
import { theme } from "../Theme";

////////////// Archive Styles

export const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 2rem 0;
`
export const BackTxt = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 500;
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: capitalize;
    padding: 0 0 0.25rem;
    margin: 1rem 0;
    width: 3rem;

    &:hover { 
        border-bottom: 3px solid ${({ theme }) => theme.accentColor};
    }
`