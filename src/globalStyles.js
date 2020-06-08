import styled from "styled-components";

export const theme = {
    primaryColor: "#49773A",
    accentColor: "#B1C5E9",
    shadowColor: "#DEDEDE",
    onHoverColor: "#B1C5E9",
    sourceColor: "lightblue",
    demoColor: "lightpink",
    screenBkgColor: "#f1f1f1",
    mainTxtColor: "#000",
    invertTxtColor: "#fff",
    headingFont: `"Poppins", Helvetica, sans-serif`,
    bodyFont: `"Poppins", Helvetica, sans-serif`,
    h1FontSize: "40px",
    h2FontSize: "30px",
    h3FontSize: "24px",
    bodyFontSize: "18px"
}

export const ScreenBkgCont = styled.div`
// background: #C9D6FF;  
// background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF); 
// background: linear-gradient(to right, #E2E2E2, #C9D6FF);
// background-color: #ececec;
background-color: #fff;
// background-image: linear-gradient(to right top, #c9d6ff, #d6dcfb, #e1e2f7, #eae9f4, #f1f1f1);
// background: linear-gradient(to right top, #c9d6ff, #dadfff, #e8e9fe, #f4f4ff, #ffffff);

    // background-image: linear-gradient(to right top, #e5e4e4, #ebebeb, #f2f1f2, #f8f8f8, #ffffff);
`

export const SectionHeading = styled.h1`
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.headingTxtColor};
    text-transform: capitalize;
    text-align: center;
    margin: 8rem 0 3rem 0;
    @media (min-width: 1025px) {
        // margin: 10rem 0 5rem 0;
    }
`