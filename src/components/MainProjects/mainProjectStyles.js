import styled from "styled-components";
import { theme } from "../Theme";

//////////////// Containers for Projects Section

export const ProjectsCont = styled.div`
    margin: 2.5rem auto;

    @media (min-width: ${theme.desktopSize}) {
      width: 1200px;
    }
`
export const ProjectFlexCont = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    width: 100%;
    padding: 1rem 0 4rem 0;
    margin: 0 0 1rem 0;

    @media (min-width: ${theme.desktopSize}) {
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0;
    }
`

//////////////// Text instruction under container

export const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    font-style: italic;
    text-align: center;
    margin: 0 0 6rem 0;

    @media (min-width: ${theme.desktopSize}) {
        display:none;
    }
`