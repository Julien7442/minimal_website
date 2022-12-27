import React from 'react';
import styles from './style';
import Godly from './components/Godly';
import CardComponent2 from './components/CardComponent2';
import GifCard from './components/GifCard'
import Spotify from './components/Spotify'
import triangle from './assets/triangle.png';
import gifChain from './assets/gifChain.mp4'

function App() {
  return (
    <div className='main-columns'>
      <div className='column1'>

      <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I'm a web developer based in France." />

       <Spotify
      title="George Benson" 
      description="Give me the night" />

       <GifCard
      gifUrl='https://media.giphy.com/media/VfzCIfxt11aFlRYMBC/giphy.gif' 
      title="My Interest in Blockchain" 
      description="I am interested in blockchain because I believe it has the potential to revolutionize the way we do business and interact with one another. With its decentralized nature and secure, transparent transactions, blockchain technology has the power to create new opportunities and efficiencies in a variety of industries. I am excited to explore the potential of this technology and see how it can shape the future." />

       <Godly
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
