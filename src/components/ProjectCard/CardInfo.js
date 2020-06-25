import React from "react";
import { CardTitle, CardDesc, StackList, StackItem } from "./cardStyles";

const CardInfo = ({ title, desc, tags }) => {

    const stack = tags;

    return (
        <>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{desc}</CardDesc>
            <StackList>
                {stack.map(item => {
                    return (
                        <StackItem>{`${item} `}</StackItem>
                    )
                })}
            </StackList>
        </>
    );
}

export default CardInfo;