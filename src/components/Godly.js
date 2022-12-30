import { Card, Typography } from '@material-tailwind/react';
import chainLink from '../assets/chainLink.png'

export default function InspirationCard(props) {
  return (
    <a 
    href="https://godly.website/">
    <Card 
    className="w-96 border-solid border-stone-900 border-1 relative flex flex-col p-[4px]  gradient__border card godly__main ">
    <div className='black__bg p-[96px]'>
      <Typography 
        className="text-white text-6xl font-extrabold godly godly__gradient godly__text"
        align="center"
        >
        Godly
      </Typography>
      <Typography 
        className="text-slate-300 mt-[20px]"
        align="center"
        >
        A website featuring a curated collection of amazing websites and web applications.
      </Typography>
      <img src={chainLink} 
          alt="github"
          className="h-[18px] w-[18px] mx-auto mt-3 absolute bottom-4 right-4"
          />
        </div>
    </Card>
    </a>
  );
}