import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "./skillsList";
import styled from "styled-components";

const SkillsContainer = () => {
    return (
        <div>
            <SectionHeading>skills</SectionHeading>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "top" }}>
                {skillsList.map(item => {
                    return (
                        <SkillCard
                            key={item.id}
                            title={item.title}
                            skills={item.skills} />
                    )
                })}
            </div>
        </div>
    )
};

const SectionHeading = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin: 10rem 0 5rem 0;
    font-size: 40px;
`


export default SkillsContainer