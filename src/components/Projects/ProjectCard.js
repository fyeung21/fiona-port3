import React from "react"

const ProjectCard = (item) => {
    return (
        <div>
            <a href="{item.url}">
                <p>View Site</p>
            </a>
            <a href="{item.github}">
                <p>View github</p>
            </a>
            <img src={"item.img"} />
            <h3>Project Card displayed here{"item.title"}</h3>
            <p>{"item.desc"}</p>
            <ul>
                <li>{"item.tags"}</li>
            </ul>
        </div>
    )
}

export default ProjectCard