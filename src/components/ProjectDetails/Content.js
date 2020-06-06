import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const Content = ({ children }) => {
    return (
        <>
            <ContentImg>{children}</ContentImg>
            <ContentImg>{children}</ContentImg>
            <ContentImg>{children}</ContentImg>
        </>
    );
};

const ContentImg = styled.div`
    background-color: lightcoral;
    height: 600px;
    margin: 2rem 0;
    border-radius: 5px;
`

export default Content;