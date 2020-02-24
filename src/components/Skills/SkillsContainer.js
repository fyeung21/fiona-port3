import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "./skillsList";
import styled from "styled-components";

const SkillsContainer = () => {
    return (
        <div>
            <SectionHeading>skills</SectionHeading>
            <Flex>
                {skillsList.map(item => {
                    return (
                        <SkillCard
                            key={item.id}
                            title={item.title}
                            skills={item.skills} />
                    )
                })}
            </Flex>
        </div>
    )
};

const SectionHeading = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin: 10rem 0 5rem 0;
    font-size: 40px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
`


export default SkillsContainer