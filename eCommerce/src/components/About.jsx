import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        We are a team of passionate and innovative developers who love selling
        amazing electronic devices for our customers. Our vision is to provide
        the best quality and value for money products that can enhance your
        productivity, entertainment, and lifestyle. Our mission is to make
        technology accessible and affordable for everyone, regardless of their
        location, budget, or preferences.
      </p>
      <h2 className="team-heading">Meet Our Team</h2>
      <section className="team-section">
        
        <div className="team-member">
          <img
            src="https://placekitten.com/150/150"
            alt="Team Member 1"
            className="team-member-image"
          />
          <p className="team-member-name">John Doe</p>
          <p className="team-member-role">Lead Developer</p>
        </div>
        <div className="team-member">
          <img
            src="https://placekitten.com/151/151"
            alt="Team Member 2"
            className="team-member-image"
          />
          <p className="team-member-name">Jane Smith</p>
          <p className="team-member-role">UI/UX Designer</p>
        </div>
      </section>
    </div>
  );
}

export default About;
