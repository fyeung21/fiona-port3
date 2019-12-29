import React from "react"

const Hero = () => {
    return (
        <div style={{ padding: "11rem 0", maxWidth: "70%" }}>
            <h1>Hi there! I'm Fiona Yeung, a full stack developer from Vancouver, BC.</h1>
            <ul style={{ display: "flex", listStyle: "none" }}>
                <li>
                    <a href="#projects"
                        style={{
                            margin: "0 5px",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            color: "black",
                            border: "2px solid teal",
                            borderRadius: "35px",
                            padding: "10px 20px"
                        }}>
                        projects
                    </a>
                </li>
                <li>
                    <a href="#"
                        style={{
                            margin: "0 5px",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            color: "black",
                            border: "2px solid teal",
                            borderRadius: "35px",
                            padding: "10px 20px"
                        }}>
                        resume
                    </a>
                </li>
            </ul>
        </div >
    )
}

export default Hero