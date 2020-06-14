import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

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
                        <TxtLink href="https://github.com/fyeung21" target="_blank">link</TxtLink>
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

const MainDetailsCont = styled.div`
    margin: 3rem auto;
    width:70%;
`
const BriefCont = styled.div`
    margin: 1rem;
`
const ProjectTitle = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h1FontSize};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 4rem 1rem;
`
const BriefType = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 1rem 0;
`
const DetailsFlexCont = styled.div`
    display: flex;
`
const TxtCont1 = styled.p`
    margin: 1rem 11rem 1rem 1rem;
`
const TxtCont2 = styled.p`
    margin: 1rem 3rem 1rem 1rem;
`
const DetailsFlex = styled.div`
    display:flex;
    align-items: baseline;
    margin: 1rem 0;
`
const StatType = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.bodyTextColor};
    text-transform: capitalize;
    margin: 0 1rem 0 0;
`
const Txt = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyTextColor};
`
const TxtLink = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: black;
    text-transform: capitalize;
`

export default Details;