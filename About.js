import React from 'react';
import dogs from './dogs.jpg';
import cats from './cats.jpg';
import birds from './birds.jpg';
import labrador from './labrador.jpg'; 
import german from './german.jpg';
import doberman from './doberman.jpg';
import persian from './persian.jpg';
import mainecoon from './mainecoon.jpg';
import britishshorthair from './britishshorthair.jpg';
import africangreyparrot from './africangreyparrot.jpg';
import lovebirds from './lovebirds.jpg';
import cockatiel from './cockatiel.jpg';

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Welcome, animal lovers! This is the perfect place to learn about our non-human friends, our beloved pets.</p>
      <h2>Dogs</h2>
      {/* Use the imported image variables as the src attribute */}
      <img src={dogs} alt="Dog" />
      <div style={{ position: 'relative', display:'inline-grid'}}>

        <img src={labrador} alt="Labrador Retriever" style={{ width: '200px', height: 'auto', marginLeft:'40px', marginRight:'20px' }} />
        <h4>Labrador Retriever</h4>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={german} alt="German Shepherd" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <h4>German Shepherd</h4>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={doberman} alt="Doberman" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <h4>Doberman</h4>
      </div>
      <h2>Cats</h2>
      <img src={cats} alt="Cat" />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={persian} alt="persian" style={{ width: '200px', height: 'auto',marginLeft:'20px', marginRight: '20px' }} />
        <h4>Persian cat</h4>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={mainecoon} alt="Maine Coon" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <h4>Maine Coon </h4>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={britishshorthair} alt="British short hair" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <h4>British Short hair</h4>
      </div>
      <h2>Birds</h2>
      <img src={birds} alt="Bird" />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={africangreyparrot} alt="african grey parrot" style={{ width: '200px', height: 'auto',marginLeft:'30px', marginRight: '20px' }} />
        <h4>African Grey Parrot </h4>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={lovebirds} alt="Love birds" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <h4>Love Birds</h4>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={cockatiel} alt="cockatiel" style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
        <h4>Cockatiel</h4>
      </div>
    </div>
  );
}

export default About;
