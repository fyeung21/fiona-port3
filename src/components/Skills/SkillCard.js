import React from "react";
import { SkillCardCont, Category, SkillListFlex, SingleSkill } from "./skillsStyles";

const SkillCard = (item) => {

    const list = item.skills;

    return (
        <SkillCardCont>
            <Category>{item.title}</Category>
            <SkillListFlex>
                {list.map(item => {
                    return (
                        <SingleSkill>{item}</SingleSkill>
                    )
                })}
            </SkillListFlex>
        </SkillCardCont>
    )
}

export default SkillCard;