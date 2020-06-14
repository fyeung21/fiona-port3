import React from "react"
import './reset.css'
import "../assets/fonts.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styled from "styled-components";
import { ScreenBkgCont } from "./globalStyles"

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

const Main = styled.div`
    margin: 0 2rem;
    @media (min-width: 768px) {
      margin: 0 3.25rem;
  }
    @media (min-width: 1025px) {
      margin: 0 5rem;
  }
`

export default Layout
