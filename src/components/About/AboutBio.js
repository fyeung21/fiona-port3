import React from "react";
import styled from "styled-components";
import Resume from "../Resume/Resume";

const AboutBio = () => {
    return (
        <TextCont>
            <Bio>
                Forever a student in life and it’s subjects,  I've eventually found myself stumbling upon web
                and app development. This opened me up to not only the world of computer languages, but also
                the vibrant and innovative community it comes with. I enjoy building websites and applications
                because it’s a practical art. Seeing users interact with what I built satisfies me greatly and
                motivates me to learn how to create better and more efficient applications. I am an easy going
                individual who is very goal oriented and strives to get things done while acknowledging that
                there is always room for improvement.
            </Bio>
            <Resume />
        </TextCont>
    )
}

const TextCont = styled.div`
    max-width: 50%;
    width: 100%;
    height: 400px;
    margin: 3rem 2rem 0 0;
    border-radius: 5px;
`
const Bio = styled.p`
    font-size:18px;
    line-height: 28px;
`

export default AboutBio;