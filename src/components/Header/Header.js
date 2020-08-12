import React from "react";
import { Container } from "../globalStyles";
import { HeaderBkgCont, HeaderSubCont, MobileVer } from "./headerStyles";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({ children }) => {
    return (
        <HeaderBkgCont>
            <Container>
                <HeaderSubCont>
                    <Logo />
                    <MobileVer>
                        <Nav>
                            {children}
                        </Nav>
                    </MobileVer>
                </HeaderSubCont>
            </Container>
        </HeaderBkgCont>
    )
}

export default Header;