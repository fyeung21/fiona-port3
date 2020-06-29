import styled from "styled-components";
import { theme } from "../Theme";

export const HomeIcon = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    margin: 1rem 0.25rem 0;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
`
export const Title = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${({ theme }) => theme.accentColor};
    margin: 0.5rem 0.25rem 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    @media (min-width: 768px) {
        margin: 0.5rem 3rem 1rem;
    }
`
export const Flex = styled.div`
    display: flex;
    flex-direction: column;
`
export const NavCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.75rem;
    @media (min-width: ${theme.tabletSize}) {
        margin: 0 2rem;
    }
    @media (min-width: ${theme.desktopSize}) {
        margin: 0 3rem;
    }
`
export const MenuCont = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${theme.tabletSize}) {
        flex-direction: row;
    }
`
export const linkStyle = {
    textDecoration: "none"
}

export const NavText = styled.p`
    font-family: ${theme.headingFont};
    font-size: ${theme.h4FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: right;
    padding: 0.75rem 0;
    &:hover {
        font-weight: 600;
    }
    @media (min-width: ${theme.tabletSize}) {
        padding: 0.75rem 1.25rem;
        &:hover {
            background-color: ${({ theme }) => theme.accentColor};
            color: ${({ theme }) => theme.invertTxtColor};
            border-radius: 5px;
            font-weight: 400;
        }
    }
`
export const NavTextResume = styled.a`
    font-family: ${theme.headingFont};
    font-size: ${theme.h4FontSize};
    color: ${({ theme }) => theme.mainTxtColor};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: right;
    padding: 0.75rem 0;
    &:hover {
        font-weight: 600;
    }
    @media (min-width: ${theme.tabletSize}) {
        padding: 0.75rem 1.25rem;
        &:hover {
            background-color: ${({ theme }) => theme.accentColor};
            color: ${({ theme }) => theme.invertTxtColor};
            border-radius: 5px;
            font-weight: 400;
        }
    }
`