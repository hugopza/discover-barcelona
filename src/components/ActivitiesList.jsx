import React from 'react';
import ActivityCard from './ActivityCard';
import parcGuelImg from "../assets/parc-guell.webp";
import platjaBarcelona from "../assets/Platja_Barceloneta_Barcelona_.webp";
import barriGoticImg from "../assets/barri-gotic.jpg"
import tapasImg from "../assets/tapas-bcn.webp"
import sagradaFamíliaImg from "../assets/sagrada-familia.webp"
import campNouImg from "../assets/camp-nou.webp"
const activitiesData = [
  {
    id: 1,
    name: 'Visit Sagrada Família',
    description: 'Explore Gaudí’s unfinished masterpiece, a symbol of Barcelona.',
    image: sagradaFamíliaImg
  },
  {
    id: 2,
    name: 'Walk through the Gothic Quarter',
    description: 'Get lost in the narrow streets of the historic city center.',
    image: barriGoticImg
  },
  {
    id: 3,
    name: 'Beach day at Barceloneta',
    description: 'Relax on the sand and enjoy the Mediterranean sea.',
    image: platjaBarcelona
  },
  {
    id: 4,
    name: 'Taste local tapas',
    description: 'Experience the culinary delights of Catalonia at local bars.',
    image: tapasImg
  },
  {
    id: 5,
    name: 'Visit Park Güell',
    description: 'Wander through the colorful mosaic park with city views.',
    image: parcGuelImg
  },
    {
    id: 6,
    name: 'Visit Spotify Camp Nou',
    description: 'Step into Camp Nou, the legendary home of FC Barcelona, and relive the club’s greatest victories and iconic moments.',
    image:campNouImg
  },
];

const ActivitiesList = ({ onAdd }) => {
  return (
    <section id="activities" className="activities-section" style={{ padding: '4rem 2rem', backgroundColor: '#ecf0f1' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>Tourist Activities</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {activitiesData.map(activity => (
          <ActivityCard 
            key={activity.id} 
            activity={activity} 
            onAdd={onAdd} 
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesList;
