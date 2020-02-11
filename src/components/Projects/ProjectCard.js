import React from "react"

const test = {
    border: "2px solid lightgrey",
    borderRadius: "5px",
    boxShadow: "5px 5px 10px lightgrey",
    position: "relative"
}
const flex = {
    display: "flex", justifyContent: "space-between"
}
const hoverLink = {
    backgroundColor: "lightgrey",
    padding: "5px 10px",
    textTransform: "capitalize",
    color: "black"
}

const ProjectCard = (item) => {
    return (
        <div style={test}>
            <div style={flex}>

                {item.url ?
                    <a href={item.url} style={{ textDecoration: "none" }}>
                        <p style={hoverLink}>View Site</p>
                    </a>
                    : null}

                {item.github ?
                    <a href={item.github} style={{ textDecoration: "none" }}>
                        <p style={hoverLink}>View github</p>
                    </a>
                    : null}
            </div>
            <img src={item.img}
                style={{
                    display: "block",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    position: "relative"
                }}
                alt="project screenshot" />

            <div style={{ margin: "1rem" }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
                        {item.tags.map(item => {
                            return (
                                <p>{item.tags}</p>
                            )
                        })}
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