import React from "react";
import {
    StyledCard,
    StyledImg,
    CardText,
    TitleFlex,
    Heading,
    StackList,
    StackItem,
    Text,
    Flex,
    LinkTo
} from './cardStyles';

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
                        <LinkTo isSource href={item.github}>
                            Source
                        </LinkTo>
                        : null
                    }

                    {item.url ?
                        <LinkTo href={item.url}>
                            Demo
                        </LinkTo>
                        : null
                    }
                </Flex>

            </CardText>
        </StyledCard>
    );
}

export default ProjectCard;