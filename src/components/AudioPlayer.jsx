import React from 'react';
import audioAmbientBcn from "../assets/audio/audio-ambient-bcn.mp3";

const AudioPlayer = () => {
  return (
    <section
      className="audio-section"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <h2 style={{ marginBottom: '1.5rem' }}>
        Sounds of Barcelona
      </h2>

      <p style={{ marginBottom: '2rem', color: '#ccc', maxWidth: '800px', marginInline: 'auto' }}>
        This audio combines characteristic sounds of Barcelona, including city traffic,
        the atmosphere of Camp Nou, the sound of the sea, and the surroundings of the
        Sagrada Família, to recreate the city’s unique ambience.
      </p>

      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '1rem',
          backgroundColor: '#444',
          borderRadius: '50px'
        }}
      >
        <audio
          controls
          preload="none"
          aria-label="Ambient sounds of Barcelona"
          style={{
            width: '100%',
            outline: 'none'
          }}
        >
          <source src={audioAmbientBcn} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default AudioPlayer;
