import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section" style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>Experience Barcelona</h2>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <video 
          controls 
          width="100%" 
          poster="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          style={{ borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
        >
          {/* Using a sample standard video for demonstration purposes if local file is missing */}
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <p style={{ marginTop: '1rem', color: '#777', fontStyle: 'italic' }}>Watch our promotional tour</p>
      </div>
    </section>
  );
};

export default VideoSection;
