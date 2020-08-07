import React from "react";
import { Link } from "gatsby";
import { linkStyle } from "../globalStyles";
import { Flex, HomeIcon, Title } from "./headerStyles";

const Logo = () => {
    return (
        <Link to="/" style={linkStyle}>
            <Flex>
                <HomeIcon>fiona.</HomeIcon>
                <Title>full-stack developer</Title>
            </Flex>
        </Link>
    )
}

export default Logo;