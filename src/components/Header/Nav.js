import React from "react";
import { Link } from "gatsby";
import { linkStyle } from "../globalStyles";
import { NavCont, NavTxt, NavTxtResume, NavIconCont, ItemCont } from "./headerStyles";
import UserIcon from "../../Icons/UserIcon";
import FileText from "../../Icons/FileText";
import CodeBrace from "../../Icons/CodeBrace";
import Pdf from "../../assets/FionaYeung-Resume2020.pdf";

const Nav = ({ children }) => {

    return (
        <NavCont>
            <ItemCont>
                <Link to="/" style={linkStyle}>
                    <NavIconCont>
                        <CodeBrace />
                    </NavIconCont>
                    <NavTxt>Work</NavTxt>
                </Link>
            </ItemCont>
            <ItemCont>
                <Link to="/about" style={linkStyle}>
                    <NavIconCont>
                        <UserIcon />
                    </NavIconCont>
                    <NavTxt>About</NavTxt>
                </Link>
            </ItemCont>
            <ItemCont>
                <NavTxtResume href={Pdf} target="_blank" rel="noopener noreferrer">
                    <NavIconCont>
                        <FileText />
                    </NavIconCont>
                    <NavTxt>Resume</NavTxt>
                </NavTxtResume>
            </ItemCont>
            {children}
        </NavCont>
    )
}



export default Nav;