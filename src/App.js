import React from 'react';
import Godly from './components/Godly';
import CardComponent2 from './components/CardComponent2';
import GifCard from './components/GifCard'
import GifCard2 from './components/GifCard2'
import Eth from './components/Eth'
import Scene from './components/DragBox'
import Spotify from './components/Spotify'
import triangle from './assets/triangle.png';



function App() {
  return (
    <div className='main-columns'>
      
      <div className='column1'>

      <CardComponent2 
      imageUrl={triangle} 
      title="Julien" 
      description="I am a French developer living in France. Currently, I am focusing on learning React, JavaScript, and Solidity." />

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

      <Eth 
      title="Goerli Testnet Address" 
      description="0xE6e429E750dC5240De6F4E4805e41745B9310F71" />

      <Scene
     />

      <GifCard2 
      gifUrl='https://media.giphy.com/media/fXKtLmi5F8ZuWtQuQm/giphy-downsized-large.gif'
      title="Julien" 
      description="I'm a web developer based in France." />
      </div>
    </div>
  )
  
}

export default App;
