import React from "react";
import { Link } from "gatsby";
import { linkStyle } from "../globalStyles";
import { NavCont, NavTxt, NavTxtResume } from "./headerStyles";
import Pdf from "../../assets/FionaYeung-Resume2020.pdf";

const Nav = ({ children }) => {

    return (
        <NavCont>
            <Link to="/" style={linkStyle}>
                <NavTxt>Work</NavTxt>
            </Link>
            <Link to="/about" style={linkStyle}>
                <NavTxt>About</NavTxt>
            </Link>
            <NavTxtResume href={Pdf} target="_blank" rel="noopener noreferrer">
                Resume
            </NavTxtResume>
            {children}
        </NavCont>
    )
}



export default Nav;