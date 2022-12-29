import React from 'react';
import ReactDOM from 'react-dom';
import Matter from 'matter-js';
import { sample } from 'lodash';
import { Card } from '@material-tailwind/react';
import image1 from '../assets/ethWhite.png';
import image2 from '../assets/jsLogo.jpg';
import image3 from '../assets/blender.png';
import image4 from '../assets/Ps.jpg';
import image5 from '../assets/reactLogo.jpg';
import image6 from '../assets/solidity.png';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    var ballA = Bodies.circle(render.options.width / 2, render.options.height / 2 - 100, 30, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image1,
          xScale: 0.035,
          yScale: 0.035,
        },
      },
    });

    var ballB = Bodies.circle(render.options.width / 2, render.options.height / 2 - 75, 35, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image3,
          xScale: 0.2,
          yScale: 0.2,
        },
      },
    });

    var ballC = Bodies.rectangle(render.options.width / 2, render.options.height / 2 - 50, 65, 65, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: image2,
          xScale: 0.15,
          yScale: 0.15,
        },
      },
    });

    var ballD = Bodies.rectangle(render.options.width / 2, render.options.height / 2, 65, 65, {
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
            yScale: 0.4,
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
      Bodies.rectangle(180, -10, 388, 10, { isStatic: true, render: { fillStyle: '#000000' } }),
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
      <Card className="border-solid border-slate-900 border-[1px] rounded-3xl h-[476px] w-[388px] relative overflow-hidden will-change-transform">
        <div ref="scene" />;
      </Card>
    );
  }
}
export default Scene;
