import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

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
    padding: 2.5rem 0;
    @media (min-width: 1025px) {
        padding: 1rem 2rem;
        height: 300px;
        border-left: 2px solid lightgrey;
        border-bottom: none;
    }
`

const Category = styled.h2`
    font-family: ${theme.headingFont};
    font-size: ${theme.h2FontSize};
    color: ${theme.mainTxtColor};
    line-height: 38px;
`
const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1025px) {
        display: block;
    }   
`

const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-style: italic;
    color: ${theme.mainTxtColor};
    margin: 1rem 1rem 0 0;
    @media (min-width: 1025px) {
        font-style: normal;
    }
`

export default Skills;