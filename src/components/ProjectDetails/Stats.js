import React from "react";
import { StatsMainCont, ProjectTitle, BriefCont, SubFlexCont, TypeCont, Type, Txt, TxtLink } from "./detailsStyles";
import { Container } from "../globalStyles";

const Stats = () => {
    return (
        <Container>
            <StatsMainCont>
                <ProjectTitle>{"Project Title"}</ProjectTitle>
                <BriefCont>
                    <Type>brief</Type>
                    <Txt>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}</Txt>
                </BriefCont>
                <SubFlexCont>
                    <TypeCont>
                        <Type>platform</Type>
                        <Txt>{"Web/Mobile"}</Txt>
                    </TypeCont>
                    <TypeCont>
                        <Type>team</Type>
                        <Txt>{"Solo"}</Txt>
                    </TypeCont>
                    <TypeCont>
                        <Type>role</Type>
                        <Txt>{"Developer"}</Txt>
                    </TypeCont>
                    <TypeCont>
                        <Type>status</Type>
                        <Txt>{"Not deployed"}</Txt>
                    </TypeCont>
                    <TypeCont>
                        <Type>source</Type>
                        <TxtLink href="https://github.com/fyeung21" target="_blank" rel="noopener noreferrer">Link</TxtLink>
                    </TypeCont>
                    <TypeCont>
                        <Type>technologies</Type>
                        <Txt>{"React, GraphQLReact, GraphQLReact, GraphQL"}</Txt>
                    </TypeCont>
                </SubFlexCont>
            </StatsMainCont>
        </Container>
    );
};

export default Stats;