import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "../../assets/skillsList";
import { SectionCont, SectionHeading } from "../globalStyles";
import { SkillContFlex } from "./skillsStyles";

const SkillsContainer = () => {
    return (
        <SectionCont>
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
        </SectionCont>
    )
};

export default SkillsContainer