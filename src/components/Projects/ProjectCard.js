import React from "react"

const ProjectCard = (item) => {
    return (
        <div
            style={{
                border: "2px solid lightgrey",
                borderRadius: "5px",
                boxShadow: "5px 5px 10px lightgrey",
                position: "relative"
            }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a href="{item.url}" style={{ textDecoration: "none" }}>
                    <p
                        style={{
                            backgroundColor: "lightgrey",
                            padding: "5px 10px",
                            textTransform: "capitalize",
                            color: "black"
                        }}>View Site</p>
                </a>
                <a href="{item.github}" style={{ textDecoration: "none" }} href="{item.url}">
                    <p style={{
                        backgroundColor: "lightgrey",
                        padding: "5px 10px",
                        textTransform: "capitalize",
                        color: "black"
                    }}>View github</p>
                </a>
            </div>
            <img src={"item.img"}
                style={{
                    display: "block",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    position: "relative"
                }} />

            <div style={{ margin: "1rem" }}>
                <h3>{"item.title"}</h3>
                <p>{"item.desc"}</p>
                <ul
                    style={{
                        display: "flex",
                        // position: "absolute",
                        listStyle: "none"
                    }}>
                    <li style={{
                        // backgroundColor: "lightblue",
                        border: "3px solid lightblue",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        margin: "1rem 0.25rem 1rem 0"
                    }}>
                        <p>{"item.tags"}</p>
                    </li>
                    <li style={{
                        // backgroundColor: "lightblue",
                        border: "3px solid lightblue",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        margin: "1rem 0.25rem"
                    }}>
                        <p>{"item.tags"}</p>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default ProjectCard