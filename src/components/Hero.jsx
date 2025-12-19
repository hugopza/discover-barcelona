import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="hero-overlay" style={{
        position: 'absolute',
        top: 0, 
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}></div>
      <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Discover Barcelona</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Culture, sea, history and unforgettable experiences</p>
        <button 
          onClick={() => document.getElementById('activities').scrollIntoView({ behavior: 'smooth' })}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#f5c518',
            color: '#333',
            borderRadius: '50px',
            fontWeight: 'bold'
          }}
        >
          Explore Activities
        </button>
      </div>
    </section>
  );
};

export default Hero;
