import { Card, Typography } from '@material-tailwind/react';
import ethLogo from '../assets/eth.png'
import chainLink from '../assets/chainLink.png'

export default function eth(props) {
    return (
      <Card 
      className="w-96 gap-[2px] p-[20px] border-solid border-stone-900 border-[1px] rounded-3xl relative eth__gradient">
        <div className="relative flex justify-center">
          <div className="h-[25px] w-[25px] absolute top-[18px] left-[13px] z-0" />
        <img src={ethLogo} 
        alt="props_img" 
        className="h-[200px] w-[120px]" />  
        </div>
          <Typography 
          className="text-white text-xl font-extrabold position-absolute bottom-0 left-0 mt-4"
          >
            {props.title}
          </Typography>
          <Typography 
          className="text-slate-300 position-absolute bottom-0 left-0 text-xs"
          >
              {props.description}
          </Typography> 
          <img src={chainLink} 
          alt="github"
          className="h-[18px] w-[18px] mx-auto mt-3 absolute bottom-4 right-4"
          />
      </Card>
    );
  }
  