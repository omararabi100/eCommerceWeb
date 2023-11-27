import React, { useEffect, useState } from 'react';

function About({darkMode}) {
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#666")
    const [headingColor, setHeadingColor] = useState("#444")
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#444")
            setSecondaryColor("white")
            setHeadingColor("white")
        }
        else {
            setPrimaryColor("white")
            setSecondaryColor("#666")
            setHeadingColor("#444")
        }
    }, [darkMode])
    const itemStyleHeading = {
        backgroundColor: primaryColor,
        color: headingColor
    }
    const itemStyle = {
        backgroundColor: primaryColor,
        color: secondaryColor
    }
    return (
    <div className="about" style={itemStyle}>
        <h1 className="about-heading" style={itemStyleHeading}>About Us</h1>
        <p className="about-description" style={itemStyle}>
        We are a team of passionate and innovative developers who love selling
        amazing electronic devices for our customers. Our vision is to provide
        the best quality and value for money products that can enhance your
        productivity, entertainment, and lifestyle. Our mission is to make
        technology accessible and affordable for everyone, regardless of their
        location, budget, or preferences.
        </p>
        <h2 className="team-heading" style={itemStyleHeading}>Meet Our Team</h2>
        <section className="team-section">
        
        <div className="team-member">
            <img
            src="https://placekitten.com/150/150"
            alt="Team Member 1"
            className="team-member-image"
            />
            <p className="team-member-name" style={itemStyleHeading}>John Doe</p>
            <p className="team-member-role" style={itemStyle}>Lead Developer</p>
        </div>
        <div className="team-member">
            <img
            src="https://placekitten.com/151/151"
            alt="Team Member 2"
            className="team-member-image"
            />
            <p className="team-member-name" style={itemStyleHeading}>Jane Smith</p>
            <p className="team-member-role" style={itemStyle}>UI/UX Designer</p>
        </div>
        </section>
    </div>
    );
}

export default About;
