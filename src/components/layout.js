import React from "react"
import './reset.css'
import "./layout.css"
import "../assets/fonts.css"
import Header from "./Header/Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header style={{ display: "flex", justifyContent: "space-between" }} />
      <div
        style={{
          margin: `0 5rem`
        }}
      >
        {children}

        <Footer />
      </div>
    </>
  )
}

export default Layout
