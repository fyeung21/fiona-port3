import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { theme } from "../globalStyles";

const NotFound = () => {
    return (
        <NotFoundCont>
            <Text404>NOT FOUND</Text404>
            <Body404>This route doesn&#39;t exist... It&#39;s time to go back <Link to="/">home</Link>.</Body404>
        </NotFoundCont>
    )
}

const Text404 = styled.h2`
    font-family: ${theme.headingFont};
    font-size: ${theme.h2FontSize};
    color: ${theme.mainTxtColor};
    text-align: left;
`

const Body404 = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.mainTxtColor};
    text-align: left;
    margin: 2rem auto;
`

const NotFoundCont = styled.div`
    margin: 6rem auto 16rem;
    @media (min-width: ${theme.tabletSize}) {
      margin: 8rem 2rem 40rem;
    }
    @media (min-width: ${theme.desktopSize}) {
      margin: 8rem 5rem 24rem;
    }
`

export default NotFound;