import React from "react";
import { Link } from "gatsby";
import { linkStyle } from "../globalStyles";
import { NavCardCont, NavImg, NavTitle } from "./detailStyles";

const NavCard = ({ link, img, title }) => {
    return (
        <Link to="/" rel="noopener noreferrer" style={linkStyle}>
            <NavCardCont>
                <NavImg src={img} alt="project-thumbnail" />
                <NavTitle>{title}</NavTitle>
            </NavCardCont>
        </Link>
    );
}

export default NavCard;