import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const Header = () => {
    return (
        <NavCont>
            <Link to="/" style={linkStyle}>
                <NavText>Fiona Yeung</NavText>
            </Link>
            <NavText>Back to Top</NavText>
        </NavCont>
    )
}

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
const linkStyle = {
    textDecoration: "none",
    color: "black"
}

const NavText = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
    margin: 1rem 5px;
    text-transform: capitalize;
    &:hover {
        background-color: ${theme.onHoverColor};
    }
`

export default Header;