import React from "react";
import { func, string } from "prop-types";
import { ThemeBtn } from "./toggleStyles";
import { Moon } from "react-feather";
import { Sun } from "react-feather";


const Toggler = ({ theme, toggleTheme }) => {
    return (
        <ThemeBtn onClick={toggleTheme}>
            {theme === "light" ?
                <Moon color={"#000"} size={20} />
                : <Sun color={"#FAFAFA"} size={20} />}
        </ThemeBtn>
    );
};

Toggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggler;