import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "../../assets/skillsList";
import { MainCont, SectionHeading } from "../globalStyles";
import { SkillContFlex } from "./skillsStyles";

const SkillsContainer = () => {
    return (
        <MainCont>
            <SectionHeading>skills</SectionHeading>
            <SkillContFlex>
                {skillsList.map(item => {
                    return (
                        <SkillCard
                            key={item.id}
                            title={item.title}
                            skills={item.skills} />
                    )
                })}
            </SkillContFlex>
        </MainCont>
    )
};

export default SkillsContainer