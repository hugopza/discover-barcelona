import React from 'react';

const ActivityCard = ({ activity, onAdd }) => {
  return (
    <div className="activity-card" style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s'
    }}>
      {/* Image placeholder for activity */}
      <div style={{ height: '200px', backgroundColor: '#ddd', backgroundImage: `url(${activity.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{activity.name}</h3>
        <p style={{ color: '#666', marginBottom: '1rem', flex: 1 }}>{activity.description}</p>
        <button 
          onClick={() => onAdd(activity)}
          style={{
            marginTop: 'auto',
            padding: '0.75rem',
            backgroundColor: '#0070c9',
            color: '#fff',
            borderRadius: '5px',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005a9e'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070c9'}
        >
          Add to plan
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
