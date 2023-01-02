import { Card, Typography } from '@material-tailwind/react';
import btc from '../assets/btc.png';


export default function gifCard(props) {
    return (
      <Card 
      className="w-96 p-[24px] border-solid border-stone-800 border-[1px] rounded-3xl relative flex flex-col gap-[24px] gif_bg">
              <Card className='h-[204px] border-slate-900 border-[8px] rounded-3xl box-shadow-lg'>
          <div className='h-[204px] relative cyan__gradient'>
              <div className="relative flex items-center justify-center h-full">
                  <img src={props.gifUrl}
                  alt="props_img" 
                  className="rounded-xl" />  
                  
              </div>
          </div>
          </Card>
          
          <Typography 
          className="text-white text-2xl">
            {props.title}
          </Typography>
          <Typography 
          className="text-slate-300">
              {props.description}
          </Typography> 
          <div 
      className="w-5 h-5  rounded-full absolute bottom-3 right-3">
        <img 
        src={btc} 
        alt="btc-logo" 
        className="h-full w-full" />
      </div>
         
      </Card>
    );
  }
