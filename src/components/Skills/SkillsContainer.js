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
    margin: 0 3rem;
    font-size: 40px;
    @media (min-width: 1025px) {
        margin: 10rem 0 5rem 0;
    }
`

const Flex = styled.div`
    @media (min-width: 1025px) {
        display: flex;
        justify-content: space-between;
        align-items: top;
    }
`


export default SkillsContainer