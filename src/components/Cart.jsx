import React from 'react';

const Cart = ({ items, onRemove, isSaved, onSave, onClear }) => {
  return (
    <div className="cart-planner" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
      zIndex: 100,
      maxWidth: '300px',
      maxHeight: '400px',
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f5c518', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>My itinerary ({items.length})</h3>
        <button 
          onClick={onClear}
          style={{
            background: 'none', 
            border: 'none', 
            fontSize: '1.5rem', 
            cursor: 'pointer', 
            color: '#e74c3c',
            marginTop: '-5px'
          }}
          title="Clear all"
        >
          &times;
        </button>
      </div>
      {items.length === 0 ? (
        <p>No activities selected.</p>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {items.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.9rem', display: 'block' }}>{item.name}</span>
                {item.time && <span style={{ fontSize: '0.8rem', color: '#666' }}>Time: {item.time}</span>}
              </div>
              <button 
                onClick={() => onRemove(item.id)}
                style={{
                  color: 'red',
                  background: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  padding: '0 5px'
                }}
                title="Remove"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
         <button 
           onClick={onSave}
           style={{ 
             backgroundColor: isSaved ? '#2ecc71' : '#f5c518', 
             color: isSaved ? '#fff' : '#000',
             padding: '0.5rem 1rem', 
             borderRadius: '5px', 
             cursor: isSaved ? 'default' : 'pointer',
             transition: 'all 0.3s ease'
           }}
           disabled={isSaved}
         >
           {isSaved ? "Saved \u2713" : "Save Itinerary"}
         </button>
      </div>
    </div>
  );
};

export default Cart;
