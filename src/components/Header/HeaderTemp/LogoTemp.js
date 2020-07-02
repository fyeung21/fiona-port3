import React from "react";
import { Link } from "gatsby";
import { Flex, HomeIcon, Title, linkStyle } from "../headerStyles";

const LogoTemp = () => {

    return (
        <Link to="/" style={linkStyle}>
            <Flex>
                <HomeIcon>Fiona Y.</HomeIcon>
                <Title>Full-Stack Developer</Title>
            </Flex>
        </Link>
    )
}

export default LogoTemp;