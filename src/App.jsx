import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import ActivitiesList from './components/ActivitiesList';
import Cart from './components/Cart';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("itinerary");
    return saved ? JSON.parse(saved) : [];
  });
  const [isSaved, setIsSaved] = useState(() => {
     return !!localStorage.getItem("itinerary");
  });

  const addToCart = (activity) => {
    if (!cart.find(item => item.id === activity.id)) {
      setCart([...cart, activity]);
      setIsSaved(false);
    } else {
      alert("This activity is already in your itinerary!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    setIsSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("itinerary", JSON.stringify(cart));
    setIsSaved(true);
  };

  return (
    <div className="app-container">
      <Hero />
      <About />
      <VideoSection />
      <ActivitiesList onAdd={addToCart} />
      {cart.length > 0 && <Cart items={cart} onRemove={removeFromCart} isSaved={isSaved} onSave={handleSave} />}
      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;
