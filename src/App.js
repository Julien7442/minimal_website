import React from 'react';
import Godly from './components/Godly';
import CardComponent2 from './components/CardComponent2';
import GifCard from './components/GifCard'
import Eth from './components/Eth'
import Scene from './components/DragBox'
import Spotify from './components/Spotify'
import ImageSlider from './components/Slider'
import { SliderData } from './components/SliderData';
import circle from './assets/circle.png';
import Mailbox from './components/Mailbox';
import Spline from './components/Spline';



function App() {
  return (
    <div className='main-columns'>
      
      <div className='column1 top-left'>

      <CardComponent2 
      imageUrl={circle} 
      title="Julien" 
      description="I am a French developer living in France. Currently, I am focusing on learning React and Solidity." />

       <Spotify
      title="George Benson" 
      description="Give me the night" />

       <GifCard
      gifUrl='https://media.giphy.com/media/VfzCIfxt11aFlRYMBC/giphy.gif' 
      title="My Interest in Blockchain" 
      description="I am interested in blockchain because I believe it has the potential to revolutionize the way we do business and interact with one another. With its decentralized nature and secure, transparent transactions, blockchain technology has the power to create new opportunities and efficiencies in a variety of industries. I am excited to explore the potential of this technology and see how it can shape the future." />

       <Godly />

      </div>
      <div className='column1 top-right'>

      <Eth 
      title="Goerli Testnet Address" 
      description="0xE6e429E750dC5240De6F4E4805e41745B9310F71" />

      <Scene />

      <ImageSlider slides={SliderData} />

      <Mailbox />


      </div>
      <div className='bottom'>
      <Spline className="Spline" />
      </div>
    </div>
  )
  
}

export default App;
