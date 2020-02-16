import React from "react"
import './reset.css'
import "./layout.css"
import "../assets/fonts.css"
import Header from "./Header/Header"
import Footer from "./Footer"
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.div`
    margin: 0 5rem;
`

export default Layout
