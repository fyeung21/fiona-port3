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
    text-transform: lowercase;
    letter-spacing: 1px;
    text-align: left;
    margin: 2rem 0 1rem;
`

///////////////// Overall Main Container

export const MainCont = styled.div`
    width: 340px;
    margin: 2.5rem auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 375px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 700px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 900px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1200px;
    }
`

//////////////// TopBottom Marginless Container for MobileHeader & Footer

export const Container = styled.div`
    width: 340px;
    margin: 0 auto;

    @media (min-width: ${theme.skinnyWindowSize}) {
      width: 375px;
    }
    @media (min-width: ${theme.tabletSize}) {
      width: 700px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
      width: 900px;
    }
    @media (min-width: ${theme.desktopSize}) {
      width: 1200px;
    }
`

/////////////// JS Styling for Link to's

export const linkStyle = {
  color: "#000",
  textDecoration: "none"
}