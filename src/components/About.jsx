import React from 'react';
import ramblasImg from "../assets/images/rambla-bcn.jpg";

const About = () => {
  return (
    <section className="about-section" style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0070c9' }}>About the City</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
            Barcelona is an enchanting seaside city with boundless culture, fabled architecture, and a world-class drinking and dining scene. 
            From the architectural wonders of Gaudi to the vibrant life of Las Ramblas, Barcelona offers a unique Mediterranean lifestyle that captivates every visitor.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            Whether you want to relax on the beach, explore history in the Gothic Quarter, or enjoy modern art, Barcelona has it all.
          </p>
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <img 
            src={ramblasImg} 
            alt="Barcelona Architecture" 
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
