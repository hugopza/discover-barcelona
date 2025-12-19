import React from 'react';

const AudioPlayer = () => {
  return (
    <section className="audio-section" style={{ padding: '4rem 2rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Sounds of Barcelona</h2>
      <p style={{ marginBottom: '2rem', color: '#ccc' }}>Immerse yourself in the ambient sounds of the city.</p>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', backgroundColor: '#444', borderRadius: '50px' }}>
        <audio controls style={{ width: '100%', outline: 'none' }}>
           {/* Placeholder audio file */}
           <source src="https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3" type="audio/mp3" />
           Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default AudioPlayer;
