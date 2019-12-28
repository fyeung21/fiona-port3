import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <div>
            <div>

            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <p>Portfolio</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-me">
                            <p>About Me</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header