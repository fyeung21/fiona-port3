import React from "react"

const Footer = () => {
    return (
        <div style={{
            backgroundColor: "darkgrey",
            borderRadius: "5px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "3rem 0"
            }}>
                <h1>Contact Me!</h1>
                <div style={{
                }}>
                    <h2 style={{ textTransform: "capitalize" }}>fiona yeung</h2>
                    <ul style={{ listStyle: "none" }}>
                        <li><i class="far fa-envelope"></i>
                            <a href="mailto:fyeung21@gmail.com?subject=Let's Chat!"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p>fyeung21@gmail.com</p>
                            </a>
                        </li>

                        <li><i class="fab fa-linkedin-in"></i>
                            <a href="https://www.linkedin.com/in/fionaa-yeungg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p>linkedin.com/in/fionaa-yeungg</p>
                            </a></li>

                        <li><i class="fab fa-github"></i>
                            <a href="https://github.com/fyeung21"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <p>github.com/fyeung21</p>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer