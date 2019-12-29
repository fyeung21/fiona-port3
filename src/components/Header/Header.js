import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>

            <ul style={{ display: "flex", listStyle: "none", }}>
                <li style={{ margin: "0 5px" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <p>Portfolio</p>
                    </Link>
                </li>
                <li style={{ margin: "0 5px" }}>
                    <Link to="/about-me" style={{ textDecoration: "none", color: "black" }}>
                        <p>About Me</p>
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default Header