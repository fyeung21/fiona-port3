import React from "react";
import { MainDetailsCont, ProjectTitle, BriefCont, BriefType, Txt, DetailsFlexCont, TxtCont1, DetailsFlex, StatType, TxtCont2, TxtLink } from "./detailsStyles";

const Details = () => {
    return (
        <MainDetailsCont>
            <ProjectTitle>{"Project Title"}</ProjectTitle>
            <BriefCont>
                <BriefType>brief:</BriefType>
                <Txt>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}</Txt>
            </BriefCont>
            <DetailsFlexCont>
                <TxtCont1>
                    <DetailsFlex>
                        <StatType>platform:</StatType>
                        <Txt>{"Web/Mobile"}</Txt>
                    </DetailsFlex>
                    <DetailsFlex>
                        <StatType>duration:</StatType>
                        <Txt>{"3 weeks"}</Txt>
                    </DetailsFlex>
                    <DetailsFlex>
                        <StatType>team:</StatType>
                        <Txt>{"Solo"}</Txt>
                    </DetailsFlex>
                    <DetailsFlex>
                        <StatType>role:</StatType>
                        <Txt>{"Developer"}</Txt>
                    </DetailsFlex>
                </TxtCont1>
                <TxtCont2>
                    <DetailsFlex>
                        <StatType>status:</StatType>
                        <Txt>{"Not deployed"}</Txt>
                    </DetailsFlex>
                    <DetailsFlex>
                        <StatType>source:</StatType>
                        <TxtLink href="https://github.com/fyeung21" target="_blank" rel="noopener noreferrer">link</TxtLink>
                    </DetailsFlex>
                    <DetailsFlex>
                        <StatType>technologies:</StatType>
                        <Txt>{"React, GraphQLReact, GraphQLReact, GraphQL"}</Txt>
                    </DetailsFlex>
                </TxtCont2>
            </DetailsFlexCont>
        </MainDetailsCont>
    );
};

export default Details;