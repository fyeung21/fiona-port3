import styled from "styled-components";

export const theme = {
    primaryColor: "#49773A",
    accentColor: "#9dabe3",
    shadowColor: "#B8B8B8",
    screenBkgColor: "#f8f8f8",
    cardBkgColor: "#fafafa",
    mainTxtColor: "#000",
    invertTxtColor: "#fafafa",
    headingFont: `"Barlow Semi Condensed", Helvetica, sans-serif`,
    bodyFont: `"Open sans", Helvetica, sans-serif`,
    h1FontSize: "44px",
    h2FontSize: "30px",
    h3FontSize: "24px",
    h4FontSize: "20px",
    bodyFontSize: "18px",
    smallFontSize: "15px",
    tabletSize: "768px",
    desktopSize: "1200px",
    widescreenSize: "1400px",
}

export const ScreenBkgCont = styled.div`
    background-color: ${theme.screenBkgColor};
`
export const SectionCont = styled.div`
    margin: 10rem auto;
`
export const SectionHeading = styled.h1`
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.headingTxtColor};
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