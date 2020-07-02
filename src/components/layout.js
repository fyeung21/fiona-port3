import React from "react"
import './reset.css'
import "../assets/fonts.css"
// import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Main, GlobalStyles } from "./globalStyles"

import LogoTemp from "./Header/HeaderTemp/LogoTemp";
import NavTemp from "./Header/HeaderTemp/NavTemp";
import { NavCont, MenuCont } from "./Header/headerStyles";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "./Theme";
import Toggle from "../components/Header/Toggler";

const Layout = ({ children }) => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {/* <Header /> */}
      <NavCont>
        <LogoTemp />
        <MenuCont>
          <NavTemp />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </MenuCont>
      </NavCont>
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
