import React from 'react';
import Matter from 'matter-js';
import { Card, Typography } from '@material-tailwind/react';
import image1 from '../assets/htmlLogo.png';
import image2 from '../assets/cssLogo.png';
import image3 from '../assets/TSlogo.png';
import image4 from '../assets/Ps.jpg';
import image5 from '../assets/reactLogo.jpg';
import image6 from '../assets/solidity.png';
import stack from '../assets/stack.jpg';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Composites = Matter.Composites;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var engine = Engine.create({
      gravity: {
        x: 0,
        y: 0.45,
      },
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,

      options: {
        width: 388,
        height: 490,
        background: 'black',
        wireframes: false,
      },
    });

    var images = [image1, image2, image3, image4, image5];

    var ballA = Bodies.rectangle(render.options.width / 2, render.options.height / 2 - 100, 30, 30, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image1,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    var ballB = Bodies.circle(render.options.width / 2, render.options.height / 2 - 75, 22, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image3,
          xScale: 0.3,
          yScale: 0.3,
        },
      },
    });

    var ballC = Bodies.rectangle(render.options.width / 2, render.options.height / 2 - 50, 50, 50, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image2,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    });

    var ballD = Bodies.rectangle(render.options.width / 2, render.options.height / 2, 64, 64, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image4,
          xScale: 0.04,
          yScale: 0.04,
        },
      },
    });

    var ballE = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2 + 25,
      40,

      {
        restitution: 0.5,
        render: {
          sprite: {
            texture: image5,
            xScale: 0.03,
            yScale: 0.03,
          },
        },
      }
    );

    var ballF = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2 + 50,
      20,

      {
        restitution: 0.5,
        render: {
          sprite: {
            texture: image6,
            xScale: 0.35,
            yScale: 0.38,
          },
        },
      }
    );

    World.add(engine.world, [
      //  walls
      // left
      Bodies.rectangle(-10, 230, 5, 460, { isStatic: true, render: { fillStyle: '#000000' } }),
      //  right
      Bodies.rectangle(400, 230, 40, 460, { isStatic: true, render: { fillStyle: '#000000' } }),
      //  bottom
      Bodies.rectangle(180, 475, 388, 10, { isStatic: true, render: { fillStyle: '#000000' } }),
      // top
      Bodies.rectangle(180, -10, 388, 10, { isStatic: true, render: { fillStyle: '#000000' } }),
      // text box
      Bodies.rectangle(-40, 475, 388, 130, { isStatic: true, render: { fillStyle: '#000000' } }),
       // stack box
       Bodies.rectangle(370, 475, 58, 90, { isStatic: true, render: { fillStyle: '#000000' } }),
    ]);

    World.add(engine.world, ballA);
    World.add(engine.world, ballB);
    World.add(engine.world, ballC);
    World.add(engine.world, ballD);
    World.add(engine.world, ballE);
    World.add(engine.world, ballF);

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
            cursor: 'move',
          },
        },
        element: null, // remove the mouseDown event listener
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, 'mousedown', function (event) {});

    Matter.Events.off(mouseConstraint, 'mousedown');

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    return (
      <Card className="border-solid border-stone-800 border-[1px] rounded-3xl h-[476px] w-[388px] relative overflow-hidden will-change-transform">
        <div ref="scene" />;
        <div className='flex flex-start'>
        <Typography 
          className="text-white text-lg opacity-1 z-10 absolute bottom-10 left-8 font-bold">
            My stack
          </Typography>
          <Typography 
          className="text-slate-300 opacity-1 z-10 absolute bottom-4 left-8">
              Design to code
          </Typography> 
          </div>
          <img src={stack} 
          alt="stack_icon"
          className="h-[22px] w-[22px] mx-auto mt-3 absolute bottom-4 right-4"
          />
      </Card>
    );
  }
}
export default Scene;
