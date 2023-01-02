import { Card, Typography } from '@material-tailwind/react';
import github from '../assets/github.png'

export default function card2(props) {
  return (
    <Card 
    className="w-96 gap-[24px] p-[48px] border-solid border-stone-800 border-[1px] rounded-3xl relative">
      <div className="relative">
        <div className="pink__gradient h-[25px] w-[25px] absolute top-[18px] left-[13px] z-0" />
      <img src={props.imageUrl} 
      alt="props_img" 
      className="h-[50px] w-[50px]" />  
      </div>
        <Typography 
        className="text-white text-3xl font-extrabold">
          {props.title}
        </Typography>
        <Typography 
        className="text-slate-300">
            {props.description}
        </Typography> 
        <Card 
        onClick={() => window.location.assign('https://github.com/Julien7442')} 
        className="w-min h-min flex flex-row px-[18px] py-[4px] border-solid border-stone-900 border-[1px] rounded-full relative gap-1 github__color place-content-center items-center githubButton">
            <img src={github} 
            alt="github"
            className="h-[18px] w-[18px] relative"
            />
        <Typography className="github__font">
          Github
        </Typography>
      </Card>
    </Card>
  );
}
