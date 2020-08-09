import React from "react";
import { Link } from "gatsby";
import { linkStyle } from "../globalStyles";
import { NavCont, NavTxt, NavTxtResume, NavIconCont } from "./headerStyles";
import UserIcon from "../../Icons/UserIcon";
import FileText from "../../Icons/FileText";
import CodeBrace from "../../Icons/CodeBrace";
import Pdf from "../../assets/FionaYeung-Resume2020.pdf";

const Nav = ({ children }) => {

    return (
        <NavCont>
            <Link to="/" style={linkStyle}>
                <NavIconCont>
                    <CodeBrace />
                </NavIconCont>
                <NavTxt>Work</NavTxt>
            </Link>
            <Link to="/about" style={linkStyle}>
                <NavIconCont>
                    <UserIcon />
                </NavIconCont>
                <NavTxt>About</NavTxt>
            </Link>
            <NavTxtResume href={Pdf} target="_blank" rel="noopener noreferrer">
                <NavIconCont>
                    <FileText />
                </NavIconCont>
                Resume
            </NavTxtResume>
            {children}
        </NavCont>
    )
}



export default Nav;