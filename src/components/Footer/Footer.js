import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { theme } from "../globalStyles";

const Footer = () => {
    return (
        <FooterCont>
            <Text>Developed by Fiona &copy; 2020</Text>
            <ContactCont>
                <ContactLink
                    className="fa fa-envelope"
                    href="mailto:fyeung21@gmail.com?subject=Let's grab a coffee!"
                    target="_blank"
                    rel="noopener noreferrer"
                />

                <ContactLink
                    className="fa fa-linkedin"
                    href="https://www.linkedin.com/in/fionaa-yeungg/"
                    target="_blank"
                    rel="noopener noreferrer"
                />
                <ContactLink
                    className="fa fa-github"
                    href="https://github.com/fyeung21"
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </ContactCont>
        </FooterCont>
    )
}

const FooterCont = styled.div`
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

const ContactCont = styled.div`
    display: flex;
`

const ContactLink = styled.a`
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

const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    margin: 1rem 0
`

export default Footer;