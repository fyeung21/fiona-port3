import React from "react";
import "./reset.css";
import "../assets/fonts.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { GlobalStyles } from "./globalStyles";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "./Theme";
import Toggler from "../components/ThemeToggle/Toggler";

const Layout = ({ children }) => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header>
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </Header>
      <div>
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
