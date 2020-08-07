import styled from "styled-components";
import { theme } from "../Theme";

////////////////// Skills Container

export const SkillContFlex = styled.div`
        display: flex;
        flex-direction: column;

    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: top;
    }
`

////////////////// Skill Card

export const SkillCardCont = styled.div`
    margin: 2rem 0;

    @media (min-width: ${theme.tabletSize}) {
        width: 300px;
    }
    @media (min-width: ${theme.smallLaptopSize}) {
        width: auto;
        margin: 4rem 0;
    }
`
export const Category = styled.h2`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    font-weight: 500;
    text-transform: lowercase;
    border-left: 3px solid ${({ theme }) => theme.accentColor};
    padding-left: 0.5rem;
    margin: 0 0 1rem;
`
export const SkillListFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem; 
`
export const SingleSkill = styled.p`
    color: ${({ theme }) => theme.mainTxtColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 300;
    margin: 0.5rem 0;
`