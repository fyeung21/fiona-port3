import styled from "styled-components";
import { theme } from "../Theme";

export const FooterCont = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    margin: 0 0 1rem;

    @media (min-width: ${theme.tabletSize}) {
        margin: 0 0 2rem;
    }
`
export const ContactCont = styled.div`
    display: flex;
`
export const ContactLink = styled.a`
    color: ${({ theme }) => theme.mainTxtColor};
    font-size: ${theme.h3FontSize};
    text-decoration: none;
    margin: 0 0 0 3rem;
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-out;

    :hover {
        transform: translateY(-8px);
    }
`
export const Text = styled.p`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.smallFontSize};
    font-weight: 300;
    line-height: 20px;
`