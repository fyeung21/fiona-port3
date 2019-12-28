import React from "react"
import "./layout.css"
import Header from "./Header/Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}

        <Footer />
      </div>
    </>
  )
}

export default Layout
