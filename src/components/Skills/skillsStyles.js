import styled from "styled-components";
import { theme } from "../Theme";


export const SkillContFlex = styled.div`
    @media (min-width: ${theme.desktopSize}) {
        display: flex;
        justify-content: space-between;
        align-items: top;
    }
    @media (min-width: ${theme.widescreenSize}) {
        margin: 0 auto;
    }
`

//////////////////

export const SkillCardCont = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
    padding: 2.5rem 0;
    @media (min-width: ${theme.desktopSize}) {
        padding: 1rem 2rem;
        height: 300px;
        border-left: 2px solid ${({ theme }) => theme.borderColor};
        border-bottom: none;
    }
`

export const Category = styled.h2`
    font-family: ${theme.headingFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    line-height: 38px;
`
export const SkillListFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (min-width: ${theme.desktopSize}) {
        display: block;
    }   
`

export const SingleSkill = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 1rem 0 0;
    @media (min-width: ${theme.desktopSize}) {
        font-style: normal;
    }
`