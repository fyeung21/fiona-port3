import React from "react";
import styled from "styled-components";

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
        </TextCont>
    )
}

const TextCont = styled.div`
    max-width: 80%;
    margin: 3rem auto 0;
`
const Bio = styled.p`
    font-size:18px;
    line-height: 32px;
    text-align: center;
`

export default AboutBio;