import styled from "styled-components";
import { theme } from "../../globalStyles";

export const StyledCard = styled.div`
    position: relative;
    margin: 0 2rem 0 0;
    :hover {
        opacity: 0.5;
    }
    @media (min-width: 1400px) {
        margin: 0;
    }
`

export const StyledHover = styled.div`
    position: absolute;
    z-index: 2;
`

export const StyledImg = styled.img`
    display: block;
    // height: 350px;
    width: 550px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 15px 15px 25px ${theme.shadowColor};
`
////////////////

export const CardText = styled.div`
    padding: 1rem;
    background-color:#fff;
    border-radius: 0 0 10px 10px;
`

export const TitleFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Heading = styled.h3`
    font-family: ${theme.headingFont};
    font-size: ${theme.h3FontSize};
    color: ${theme.mainTxtColor};
    margin: 0.5rem 0;
`

export const StackList = styled.ul`
    display: flex;
    list-style: none;
`

export const StackItem = styled.li`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-style: italic;
    color: ${theme.mainTxtColor};
    margin: 0 0.5rem 0 0;
`
////////////////

export const Text = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    font-weight: 300;
    line-height: 26px;
    margin: 0.5rem 0 0 0;
`

export const Flex = styled.div`
    display: flex;
    margin: 1.5rem 0 0 0;
`

export const LinkTo = styled.a`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    text-transform: capitalize;
    text-decoration: none;
    border: 3px solid ${props => props.isSource ? theme.sourceColor : theme.demoColor};
    border-radius: 5px;
    padding: 5px 10px;
    margin: 1rem 1rem 0.15rem 0;
    &:hover {
        background-color: ${props => props.isSource ? theme.sourceColor : theme.demoColor};
    }
`