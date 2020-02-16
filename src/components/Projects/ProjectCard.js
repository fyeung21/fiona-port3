import React from "react";
import styled from "styled-components";

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
                        <StyledLink href={item.github}>
                            Source
                        </StyledLink>
                        : null
                    }

                    {item.url ?
                        <StyledLink href={item.url}>
                            Demo
                        </StyledLink>
                        : null
                    }
                </Flex>

            </CardText>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    border-radius: 5px;
    box-shadow: 5px 5px 10px lightgrey;
    position: relative;
`

const StyledImg = styled.img`
    display: block;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
`
////////////////

const CardText = styled.div`
    margin: 1rem;
`

const TitleFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Heading = styled.h2`
    font-size: 28px;
    margin: 0.5rem 0;
`

const StackList = styled.ul`
    display: flex;
    list-style: none;
`

const StackItem = styled.li`
    margin: 0 0.5rem 0 0;
    font-style: italic;
`
////////////////

const Text = styled.p`
    font-size: 18px;
    line-height: 26px;
`

const Flex = styled.div`
    display: flex;
`

const StyledLink = styled.a`
    text-transform: capitalize;
    color: black;
    text-decoration: none;
    border: 3px solid lightblue;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 1rem 1rem 1rem 0;
    &:hover {
        background-color: lightblue;
    }
`

export default ProjectCard