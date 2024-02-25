import React from 'react';
import pethome from './pethome.jpg';
import pethome2 from './pethome2.jpg';
import pethome3 from './pethome3.jpg'; 
import pethome4 from './pethome4.jpg'; 

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to our pet paradise!
         Pets bring joy, companionship,and endless love into our lives.
          Whether you're a proud dog parent,a devoted cat lover, or have a fondness for smaller critters like rabbits or hamsters,
          pets enrich our daily experiences in countless ways.
         From the wag of a tail to the gentle purr of contentment, each furry, feathered, or scaly friend has a unique personality and charm.
      </p>
      <h2>Mission:</h2>
      <p> Our mission is to celebrate the bond between humans and animals, 
         providing valuable resources, heartfelt stories,and expert advice to ensure the well-being and happiness of every pet. Join us on this journey of discovery and unconditional love as we explore the 
         wonderful world of pets together</p>
      <div style={{ display: 'flex' }}>
        {/* First image */}
        <img src={pethome} alt="Pet 1" style={{ marginEnd: '8px' }} />
        {/* Second image */}
        <img src={pethome2} alt="Pet 2" style={{ marginEnd: '8px' }} />
        {/* Third image */}
        <img src={pethome3} alt="Pet 3" style={{ newmarginRight: '8px' }} />
        {/* Fourth image */}
        <img src={pethome4} alt="Pet 4" style={{ marginRight: '8px' }} />
      </div>
    </div>
  );
}

export default Home;
