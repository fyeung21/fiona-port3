import React from "react";
import { Container } from "../globalStyles";
import { StatsMainCont, ProjectTitle, BriefCont, SubFlexCont, TypeCont, Type, Txt, TxtLink } from "./detailStyles";

const Stats = ({ title, brief, platform, team, role, demo, github, tech }) => {
    return (
        <Container>
            <StatsMainCont>
                <ProjectTitle>{title}</ProjectTitle>

                {brief ?
                    <BriefCont>
                        <Type>brief</Type>
                        <Txt>{brief}</Txt>
                    </BriefCont>
                    :
                    <BriefCont>
                        <Type>brief</Type>
                        <Txt>{"Written content to be updated soon!"}</Txt>
                    </BriefCont>
                }

                <SubFlexCont>
                    <TypeCont>
                        <Type>platform</Type>
                        <Txt>{platform}</Txt>
                    </TypeCont>

                    {demo ?
                        <TypeCont>
                            <Type>status</Type>
                            <TxtLink href={demo} target="_blank" rel="noopener noreferrer">Active</TxtLink>
                        </TypeCont>
                        :
                        <TypeCont>
                            <Type>status</Type>
                            <Txt>{"Not deployed"}</Txt>
                        </TypeCont>
                    }

                    <TypeCont>
                        <Type>source</Type>
                        <TxtLink href={github} target="_blank" rel="noopener noreferrer">Link</TxtLink>
                    </TypeCont>
                    <TypeCont>
                        <Type>technologies</Type>
                        <Txt>{tech}</Txt>
                    </TypeCont>
                </SubFlexCont>
            </StatsMainCont>
        </Container>
    );
};

export default Stats;