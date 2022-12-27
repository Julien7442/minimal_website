import { useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import spotifyLogo from '../assets/spotifyLogo.png';
import georgeBenson from '../assets/georgeBrenson.jpg';
import playButton from '../assets/playButton.png';
import pauseButton from '../assets/pauseButton.png';
import Mp3 from '../assets/George_Benson_Give_Me_The_Night.mp3';
import { Howl, Howler } from 'howler';


function SpotifyCard(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  function playMusic() {
    console.log('playing music');
    if (!sound) {
      setSound(new Howl({
        src: [Mp3],
        html5: true,
      }));
    }
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
    Howler.volume(0.1);
  }

  return (
    <Card 
    className="w-96 p-[24px] border-solid border-stone-900 border-[1px] rounded-3xl relative spotify__gradient flex flex-row gap-[16px]">
      <div 
      className="relative ">
        <div 
        className="h-full w-full absolute top-0 left-0 z-0" />
        <div 
        className="absolute inset-0 flex items-center justify-center">
          <div 
          className="play-button__circle cursor-pointer">
          </div>
        </div>
        <div 
        className="h-[18px] w-[18px] rounded-xl play-button__container cursor-pointer" 
        onClick={playMusic}>
           {isPlaying ? (
        <img 
        src={pauseButton} 
        alt="pause-button" 
        className="h-full w-full" 
        />
        ) : (
        <img 
        src={playButton} 
        alt="play-button" 
        className="h-full w-full" 
        />
      )}
        </div>
        <img 
        src={georgeBenson} 
        alt="img-blur-shadow" 
        className="h-[50px] w-[50px] rounded-lg" />
      </div>
      <div 
      className="">
        <Typography variant="h5" 
        className="text-slate-300 text-sm">
          {props.title}
        </Typography>
        <Typography variant="body2" 
        className=" text-white text-xl font-bold">
          {props.description}
        </Typography>
      </div>
      <div 
      className="w-5 h-5  rounded-full absolute bottom-3 right-3">
        <img 
        src={spotifyLogo} 
        alt="spotify-logo" 
        className="h-full w-full" />
      </div>
    </Card>
  );
}

export default SpotifyCard