import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
    return (
        <FooterCont>
            <Text>Copyright &copy; Fiona 2020</Text>
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
    border-bottom: 2px solid lightgrey;
    margin: 0 0.75rem 3rem;
    justify-content: space-between; 
    display: flex; 
    list-style: none;
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
    text-decoration: none;
    color: black;
    font-size: 26px;
    margin: 0 0 0 3rem;
    &:hover {
        background-color: lightblue;
    }
`

const Text = styled.p`
    margin: 1rem 0
`

export default Footer;