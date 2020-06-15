import styled from "styled-components";
import { theme } from "../globalStyles";

export const FooterCont = styled.div`
    display: flex; 
    justify-content: space-between; 
    border-bottom: 2px solid lightgrey;
    list-style: none;
    margin: 0 0.75rem 3rem;
    @media (min-width: 768px) {
        margin: 0 2rem 3rem;
    }
    @media (min-width: 1025px) {
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
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
        &:hover {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        }
`
export const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    margin: 1rem 0
`
export const FootSpacer = styled.div`
    padding: 0 0.75rem 0.5rem;
`