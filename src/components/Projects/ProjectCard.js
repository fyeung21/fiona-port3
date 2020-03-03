import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const ProjectCard = (item) => {

    const stack = item.tags;

    return (
        <StyledCard>
            <StyledImg
                src={item.img}
                alt="project screenshot" />
            <CardText>
                <TitleFlex>
                    <Heading>{item.title}</Heading>
                    <StackList>
                        {stack.map(item => {
                            return (
                                <StackItem>{item}</StackItem>
                            )
                        })}
                    </StackList>
                </TitleFlex>

                <Text>{item.desc}</Text>

                <Flex>
                    {item.github ?
                        <LinkSource href={item.github}>
                            Source
                        </LinkSource>
                        : null
                    }

                    {item.url ?
                        <LinkDemo href={item.url}>
                            Demo
                        </LinkDemo>
                        : null
                    }
                </Flex>

            </CardText>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    border-radius: 10px;
    box-shadow: 15px 15px 25px ${theme.shadowColor};
    position: relative;
    margin: 0 2rem 0 0;
    @media (min-width: 1400px) {
        margin: 0
    }
`

const StyledImg = styled.img`
    display: block;
    height: 250px;
    width: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    border-radius: 10px 10px 0 0;
`
////////////////

const CardText = styled.div`
    padding: 1rem;
    background-color:#fff;
    border-radius: 0 0 10px 10px;
`

const TitleFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Heading = styled.h3`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.mainTxtColor};
    margin: 0.5rem 0;
`

const StackList = styled.ul`
    display: flex;
    list-style: none;
`

const StackItem = styled.li`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-style: italic;
    color: ${theme.mainTxtColor};
    margin: 0 0.5rem 0 0;
`
////////////////

const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    line-height: 26px;
`

const Flex = styled.div`
    display: flex;
`

const LinkSource = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    text-transform: capitalize;
    text-decoration: none;
    border: 3px solid lightblue;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 1rem 1rem 1rem 0;
    &:hover {
        background-color: lightblue;
    }
`
const LinkDemo = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    text-transform: capitalize;
    text-decoration: none;
    border: 3px solid lightpink;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 1rem 1rem 1rem 0;
    &:hover {
        background-color: lightpink;
    }
`

export default ProjectCard