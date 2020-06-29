import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
`

export const SectionCont = styled.div`
    margin: 10rem auto;
`
export const SectionHeading = styled.h1`
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    margin: 3rem 0;
`
export const Main = styled.div`
    margin: 0 2rem;
    @media (min-width: ${theme.tabletSize}) {
      margin: 0 3.25rem;
    }
    @media (min-width: ${theme.desktopSize}) {
      margin: 0 5rem;
    }
`