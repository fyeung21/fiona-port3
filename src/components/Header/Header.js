import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

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
    &:hover {
        background-color: lightblue;
    }
`

export default Header;