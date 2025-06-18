import React from 'react';
import '../styles/Information.css';

const Information: React.FC = () => {
  return (
    <div className="info-container">
      <section className="info-section">
        <h2 className="info-heading">CAPABILITIES</h2>
        <div className="info-capabilities">
          Illustration / Packaging / Signage / Creative Validation / Portraits / Painting
        </div>
      </section>
      <section className="info-section">
        <p className="info-description">
          Led by Grace Blalock, Graces Gallery is a space to showcase her work and connect with others. As an Austin born artist, she is always looking to create and share. For inquiries, please contact via email.
        </p>
      </section>
      <section className="info-contact-section">
        <div className="info-label">Email</div>
        <div className="info-contact-box" onClick={() => window.open('mailto:gracesgallery@gmail.com', '_blank')}>GRACESGALLERY@GMAIL.COM</div>
        <div className="info-label">Instagram</div>
        <div className="info-contact-box" onClick={() => window.open('https://www.instagram.com/graciepaintz', '_blank')}>@GRACIEPAINTZ</div>
      </section>
      <img src="/logo-distort.png" alt="Graces Gallery Logo" style={{ maxWidth: '220px', width: '100%', display: 'block', margin: '0 auto', marginBottom: '10vh'}} />
    </div>
  );
};

export default Information; 