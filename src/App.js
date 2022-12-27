import React from 'react';
import styles from './style';
import CardComponent from './components/CardComponent';
import CardComponent2 from './components/CardComponent2';
import Spotify from './components/Spotify'
import triangle from './assets/triangle.png';

function App() {
  return (
    <div className='main-columns'>
      <div className='column1'>

      <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />

       <Spotify
      title="George Brenson" 
      description="Give me the night" />

       <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />

       <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />
      </div>
      <div className='column1'>

      <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />

      <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />

      <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />
      </div>
    </div>
  );
}

export default App;
