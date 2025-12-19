import React from 'react';

const ActivityCard = ({ activity, onAdd }) => {
  const [selectedTime, setSelectedTime] = React.useState(activity.hours ? activity.hours[0] : null);

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
      <div style={{ height: '200px', backgroundColor: '#ddd', backgroundImage: `url(${activity.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{activity.name}</h3>
        <p style={{ color: '#666', marginBottom: '1rem', flex: 1 }}>{activity.description}</p>
        
        {activity.hours && (
           <div style={{ marginBottom: '1rem' }}>
             <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', color: '#555' }}>Available Hours:</label>
             <select 
               value={selectedTime} 
               onChange={(e) => setSelectedTime(e.target.value)}
               style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
             >
               {activity.hours.map(time => (
                 <option key={time} value={time}>{time}</option>
               ))}
             </select>
           </div>
        )}

        <button 
          onClick={() => onAdd({ ...activity, time: selectedTime })}
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
          Add to itinerary
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
