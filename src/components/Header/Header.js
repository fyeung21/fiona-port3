import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = () => {
    return (
        <NavCont>
            <Link to="/" style={linkStyle}>
                <NavText>portfolio</NavText>
            </Link>
            <Link to="/about-me" style={linkStyle}>
                <NavText>about me</NavText>
            </Link>
        </NavCont>
    )
}

const NavCont = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid lightgrey;
    margin: 0 3rem;
`
const linkStyle = {
    textDecoration: "none",
    color: "black"
}

const NavText = styled.p`
    font-size: 18;
    margin: 1rem 5px;
    text-transform: capitalize;
`

export default Header;