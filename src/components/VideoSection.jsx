import React from 'react';
import videoBarcelona from "../assets/video/video-ciutat-barcelona.mp4";
import portadaVideoImg from "../assets/images/portada-video.webp";

const VideoSection = () => {
  return (
    <section className="video-section" style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>Experience Barcelona</h2>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <video 
          controls 
          width="100%" 
          poster={portadaVideoImg}
          style={{ borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
        >
          <source src={videoBarcelona} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <p style={{ marginTop: '1rem', color: '#777', fontStyle: 'italic' }}>A spolier of the city of Barcelona</p>
      </div>
    </section>
  );
};

export default VideoSection;
