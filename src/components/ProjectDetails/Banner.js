import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const Banner = ({ children }) => {
    return (
        <>
            <BannerImg>{children}</BannerImg>
        </>
    );
};

const BannerImg = styled.div`
    background-color: lightblue;
    height: 400px;
    margin: 2rem 0;
    border-radius: 5px;
`

export default Banner;