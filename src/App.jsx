import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import ActivitiesList from './components/ActivitiesList';
import Cart from './components/Cart';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (activity) => {
    // Prevent duplicates
    if (!cart.find(item => item.id === activity.id)) {
      setCart([...cart, activity]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Hero />
      <About />
      <VideoSection />
      
      {/* Passing cart state to ActivitiesList isn't strictly necessary unless we want to disable added buttons, 
          but keeping it simple. */}
      <ActivitiesList onAdd={addToCart} />
      
      {/* Cart is always rendered but might be hidden or empty-state if empty, 
          but requirements say "A separate component acting as a cart... Shows activities selected".
          I'll keep it visible if there are items, or maybe a fixed bubble. */}
      {cart.length > 0 && <Cart items={cart} onRemove={removeFromCart} />}
      
      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;
