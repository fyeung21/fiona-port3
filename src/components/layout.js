import React from "react"
import './reset.css'
import "../assets/fonts.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styled from "styled-components";
import { ScreenBkgCont, Main } from "./globalStyles"

const Layout = ({ children }) => {
  return (
    <ScreenBkgCont>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </ScreenBkgCont>
  )
}

export default Layout
