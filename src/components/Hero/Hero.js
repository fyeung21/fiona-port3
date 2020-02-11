import React from "react"

const Hero = () => {
    return (
        <div style={heroStyle}>
            <div style={borderBox}>
                <h1>Fiona Yeung</h1>
                <h2>Full-Stack Developer</h2>
            </div>
        </div>
    )
}

const heroStyle = {
    padding: '11rem 0'
}

const borderBox = {
    padding: '20px 10px',
    margin: '0 auto',
    width: '50%',
    border: '1px solid lightgrey',
    textAlign: 'center'
}

export default Hero