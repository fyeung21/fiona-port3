import styled from "styled-components";

export const theme = {
    primaryColor: "#49773A",
    accentColor: "#9dabe3",
    shadowColor: "#B8B8B8",
    screenBkgColor: "#f8f8f8",
    mainTxtColor: "#000",
    invertTxtColor: "#fafafa",
    headingFont: `"Barlow Semi Condensed", Helvetica, sans-serif`,
    bodyFont: `"Open sans", Helvetica, sans-serif`,
    h1FontSize: "44px",
    h2FontSize: "30px",
    h3FontSize: "24px",
    h4FontSize: "20px",
    bodyFontSize: "18px",
    smallFontSize: "15px"
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
    @media (min-width: 1025px) {
        // margin: 10rem 0 5rem 0;
    }
`