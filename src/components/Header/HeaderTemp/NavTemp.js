import React from "react";
import { Link } from "gatsby";
import { NavCont, Flex, HomeIcon, Title, MenuCont, NavText, NavTextResume, linkStyle } from "../headerStyles";
import Pdf from "../../../assets/FionaYeung-Resume.pdf";

const NavTemp = () => {
    return (
        <MenuCont>
            <Link to="/" style={linkStyle}>
                <NavText>Work</NavText>
            </Link>
            <Link to="/about" style={linkStyle}>
                <NavText>About</NavText>
            </Link>
            <NavTextResume href={Pdf} target="_blank" rel="noopener noreferrer">Resume</NavTextResume>
        </MenuCont>
    )
}

export default NavTemp;