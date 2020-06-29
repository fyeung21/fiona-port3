import React from "react"
import './reset.css'
import "../assets/fonts.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Main, GlobalStyles } from "./globalStyles"

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/hooks/useDarkMode";
import Toggle from "../components/Header/Toggler";
import { lightTheme, darkTheme } from "./Theme";

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header />
      <Main>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
