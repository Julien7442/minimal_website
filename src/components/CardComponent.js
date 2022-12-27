import { Card, CardHeader, CardBody, Typography,  } from '@material-tailwind/react';

export default function card(props) {
  return (
    <Card 
    className="w-96 border-solid border-stone-800 border-2 rounded-lg">
      <CardHeader 
      color="white" 
      className="relative h-56 ">
        <img src={props.imageUrl} 
        alt="img-blur-shadow" 
        className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center ">
        <Typography variant="h5" 
        className="mb-2 ">
          {props.title}
        </Typography>
        <Typography 
        className="text-white">{props.description}</Typography>
      </CardBody>
    </Card>
  );
}
