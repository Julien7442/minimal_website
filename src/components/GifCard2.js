import { Card, Typography } from '@material-tailwind/react';
import chainLink from '../assets/chainLink.png'


export default function gifCard(props) {
    return (
      <Card 
      className="w-96 p-[4px] border-solid border-stone-900 border-[1px] rounded-3xl relative flex flex-col gap-[24px] gif__gradient ">
              <Card 
              className='h-[340px] rounded-3xl overflow-hidden border-slate-900 border-[3px] shadow-inner '>
          <div 
          className='h-[204px] relative'>
              <div 
              className="relative flex items-center justify-center max-w-full ">
                  <img  
                  src={props.gifUrl}
                  alt="props_img" 
                  className="rounded-xl" />  
              </div>
          </div>
          <img src={chainLink} 
            alt="github"
            className="h-[18px] w-[18px] relative"
            />
          </Card>
          
       
         
      </Card>
    );
  }