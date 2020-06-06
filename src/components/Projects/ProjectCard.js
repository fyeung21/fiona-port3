import React from "react";
import { Link } from "gatsby";
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
import HoverDetails from './HoverDetails';

const ProjectCard = (item) => {

    const AddHoverDetails = () => {
        return (
            <HoverDetails />
        );
    };

    const stack = item.tags;

    return (
        <Link to="/project-details">
            <StyledCard>
                <div onHover={AddHoverDetails}>
                    <StyledImg
                        src={item.img}
                        alt="project screenshot"
                    />
                </div>
                <HoverDetails />
                {/* <CardText>
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

            </CardText> */}
            </StyledCard>
        </Link>
    );
}

export default ProjectCard;