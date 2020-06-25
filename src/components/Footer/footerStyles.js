import styled from "styled-components";
import { theme } from "../globalStyles";

export const FooterCont = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    list-style: none;
    margin: 0 0.75rem;
    @media (min-width: ${theme.tabletSize}) {
        margin: 0 2rem 1rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        border-bottom: 2px solid lightgrey;
        margin: 0 3rem 3rem;
    }
`
export const ContactCont = styled.div`
    display: flex;
`
export const ContactLink = styled.a`
    font-size: ${theme.h3FontSize};
    color: ${theme.mainTxtColor};
    text-decoration: none;
    margin: 0 0 0 3rem;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-out;
        &:hover {
        transform: translateY(-8px);
        }
`
export const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    line-height: 22px;
    margin: 1rem 0;
`
export const FootSpacer = styled.div`
    padding: 0 0.75rem 0.5rem;
`