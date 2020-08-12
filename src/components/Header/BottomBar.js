import React from "react";
import { Container } from "../globalStyles";
import { BottomBarCont } from "./headerStyles";
import Nav from "./Nav";

const BottomBar = ({ children }) => {
    return (
        <BottomBarCont>
            <Container>
                <Nav>
                    {children}
                </Nav>
            </Container>
        </BottomBarCont>
    )
}

export default BottomBar;