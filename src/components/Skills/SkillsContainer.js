import React from "react"
import SkillCard from "./SkillCard"

let skillsList = [
    {
        id: 0,
        title: "front-end",
        skills: ["html", "php", "css", "JavaScript", "react"]
    },
    {
        id: 1,
        title: "back-end",
        skills: ["Node.js", "Express.js", "Meteor", "GraphQL"]
    },
    {
        id: 2,
        title: "tools/cms",
        skills: ["Gulp", "Meteor", "Gatsby", "WordPress"]
    }
];

const SkillsContainer = () => {

    return (
        <div>
            <h1 style={{ textTransform: "capitalize", textAlign: "center", marginTop: "5rem" }}>skills</h1>
            <div style={{
                borderRadius: "5px",
                boxShadow: "5px 5px 10px lightgrey",
                margin: "5rem 10rem",
                border: "2px solid lightgrey"
            }}>
                {skillsList.map(item => {
                    return (
                        <SkillCard key={item.skillsList} />
                    )
                })}
            </div>
        </div>
    )
}

export default SkillsContainer