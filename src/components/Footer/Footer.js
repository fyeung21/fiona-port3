import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container } from "../globalStyles";
import { FooterCont, Text, ContactCont, ContactLink } from "./footerStyles";

const Footer = () => {
    return (
        <Container>
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
        </Container>
    )
}

export default Footer;