import React from "react";
import { StyledHover, StyledImg } from "./cardStyles";
import styled from "styled-components";
import { theme } from "../../globalStyles";

const ProjectCard2 = (item) => {
    return (
        <StyledHover>
            <Card>
                <StyledImg
                    src={item.img}
                    alt="project screenshot"
                />
            </Card>
        </StyledHover>
    );
}

export const Card = styled.div`
    display: block;
    // height: 350px;
    width: 550px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: 15px 15px 25px ${theme.shadowColor};
`

export default ProjectCard2;