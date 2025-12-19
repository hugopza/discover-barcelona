import React from 'react';

const Cart = ({ items, onRemove }) => {
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
      <h3 style={{ borderBottom: '2px solid #f5c518', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Plan ({items.length})</h3>
      {items.length === 0 ? (
        <p>No activities selected.</p>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {items.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', marginRight: '10px' }}>{item.name}</span>
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
         <button style={{ backgroundColor: '#f5c518', padding: '0.5rem 1rem', borderRadius: '5px' }}>Save Itinerary</button>
      </div>
    </div>
  );
};

export default Cart;
