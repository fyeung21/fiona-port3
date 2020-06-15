import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "./skillsList";
import styled from "styled-components";
import { SectionCont, SectionHeading } from "../globalStyles";

const SkillsContainer = () => {
    return (
        <SectionCont>
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
        </SectionCont>
    )
};

const Flex = styled.div`
    @media (min-width: 1025px) {
        display: flex;
        justify-content: space-between;
        align-items: top;
    }
`


export default SkillsContainer