import React, { useState } from "react";
import { Link } from "gatsby";
import { NavCont, Flex, HomeIcon, Title, MenuCont, NavText, NavTextResume, linkStyle } from "./headerStyles";
import Pdf from "../../assets/FionaYeung-Resume.pdf";

const Header = () => {

    return (

        <NavCont>
            <Link to="/" style={linkStyle}>
                <Flex>
                    <HomeIcon>Fiona Y.</HomeIcon>
                    <Title>Full-Stack Developer</Title>
                </Flex>
            </Link>
            <MenuCont>
                <Link to="/" style={linkStyle}>
                    <NavText>Work</NavText>
                </Link>
                <Link to="/about" style={linkStyle}>
                    <NavText>About</NavText>
                </Link>
                <NavTextResume href={Pdf} target="_blank" rel="noopener noreferrer">Resume</NavTextResume>
            </MenuCont>
        </NavCont>
    )
}



export default Header;