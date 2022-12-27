import { Card, Typography } from '@material-tailwind/react';
import spotifyLogo from '../assets/spotifyLogo.png'
import georgeBrenson from '../assets/georgeBrenson.jpg'

export default function spotifyCard(props) {
    return (
      <Card 
      className="w-96 p-[24px] border-solid border-stone-900 border-[1px] rounded-3xl relative spotify__gradient flex flex-row gap-[32px]">
        <div className="relative ">
          <div className="h-full w-full absolute top-0 left-0 z-0" />
          <img src={georgeBrenson} 
          alt="img-blur-shadow" 
          className="h-[50px] w-[50px] rounded-xl" />  
        </div>
        <div className="">
          <Typography 
          variant="h5" 
          className="text-slate-300 text-sm">
            {props.title}
          </Typography>
          <Typography 
          variant="body2"
          className=" text-white text-xl font-bold">
              {props.description}
          </Typography>
        </div>
        <div className="w-5 h-5  rounded-full absolute bottom-3 right-3">
          <img src={spotifyLogo} 
          alt="spotify-logo" 
          className="h-full w-full" />
        </div>
      </Card>
    );
  }