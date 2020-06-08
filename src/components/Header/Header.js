import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { theme } from "../../globalStyles";
import Pdf from "../../assets/FionaYeung-Resume.pdf";

const Header = () => {
    return (
        <NavCont>
            <Link to="/" style={linkStyle}>
                <HomeIcon>Fiona Yeung</HomeIcon>
            </Link>
            <MenuCont>
                <Link to="/" style={linkStyle}>
                    <NavText>Work</NavText>
                </Link>
                <Link to="/about" style={linkStyle}>
                    <NavText>About</NavText>
                </Link>
                <NavTextResume href={Pdf} target="_blank">Resume</NavTextResume>
            </MenuCont>
        </NavCont>
    )
}

const HomeIcon = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    margin: 1rem 5px;
    text-transform: capitalize;
`

const NavCont = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid lightgrey;
    margin: 0 0.75rem;
    @media (min-width: 768px) {
        margin: 0 2rem;
    }
    @media (min-width: 1025px) {
        margin: 0 3rem;
    }
`

const MenuCont = styled.div`
    display:flex;
`
const linkStyle = {
    textDecoration: "none",
    color: "black"
}

const NavText = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    padding: 1rem 1.5rem;
    text-transform: capitalize;
    &:hover {
        background-color: ${theme.onHoverColor};
        color: ${theme.invertTxtColor};
    }
`
const NavTextResume = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: black;
    text-decoration: none;
    padding: 1rem 1.5rem;
    text-transform: capitalize;
    &:hover {
        background-color: ${theme.onHoverColor};
        color: ${theme.invertTxtColor};
    }
`

export default Header;