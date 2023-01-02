import { Card, Typography } from '@material-tailwind/react';
import ethLogo from '../assets/eth.png'
import chainLink from '../assets/chainLink.png'

export default function eth(props) {
    return (
      <a 
      href="https://goerli.etherscan.io/address/0xE6e429E750dC5240De6F4E4805e41745B9310F71">
      <Card 
      className="w-96 gap-[2px] p-[20px] border-solid border-stone-700 border-[1px] rounded-3xl relative eth__gradient ">
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
          className="position-absolute bottom-0 left-0 text-sm ethAddress__text text-white"
          >
              {props.description}
          </Typography> 
          <img src={chainLink} 
          alt="github"
          className="h-[18px] w-[18px] mx-auto mt-3 absolute bottom-4 right-4"
          />
             <Typography 
          className="text-slate-300 position-absolute bottom-0 left-0 text-base"
          >The Goerli testnet is a public Ethereum test network that can be used to test and learn about Solidity and web3 development. It allows developers to experiment with their projects in a simulated environment without having to spend real Ether or worry about the potential consequences of making mistakes or encountering errors.
          </Typography> 
      </Card>
      </a>
    );
  }
  