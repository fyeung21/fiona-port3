import React from "react";
import styled from "styled-components";

const Skills = (item) => {
    const list = item.skills;

    return (
        <StyledCard>
            <Category>{item.title}</Category>
            <Flex>
                {list.map(item => {
                    return (
                        <Text>{item}</Text>
                    )
                })}
            </Flex>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    border-bottom: 2px solid lightgrey;
    padding: 3rem 2rem;
`

const Category = styled.h2`
    font-size: 26px;
`
const Flex = styled.div`
    display: flex;
`

const Text = styled.p`
    font-size: 18px;
    margin: 1rem 1rem 0 0;
`

export default Skills;