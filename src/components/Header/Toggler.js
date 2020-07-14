import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import { Moon } from "react-feather";
import { Sun } from "react-feather";

const ThemeBtn = styled.button`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ThemeBtn onClick={toggleTheme}>
            {theme === "light" ?
                <Moon color={"#000"} size={20} />
                : <Sun color={"#FAFAFA"} size={20} />}
        </ThemeBtn>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;