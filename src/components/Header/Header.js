import React from "react";
import { Container } from "../globalStyles";
import { HeaderBkgCont, HeaderSubCont } from "./headerStyles";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({ children }) => {
    return (
        <HeaderBkgCont>
            <Container>
                <HeaderSubCont>
                    <Logo />
                    <Nav>
                        {children}
                    </Nav>
                </HeaderSubCont>
            </Container>
        </HeaderBkgCont>
    )
}

export default Header;