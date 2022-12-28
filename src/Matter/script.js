import React from "react";
import Matter from "matter-js";

const mentions = {
  commessa: {
    dati: [
      { key: "comune", livello: 35 },
      { key: "PineApp", livello: 35 },
      { key: "Azienda", livello: 50 }
    ],
    colore: "#79b2ec"
  },
  lavoro: {
    dati: [
      { key: "buca", livello: 60 },
      { key: "verde", livello: 35 },
      { key: "cantiere", livello: 30 }
    ],
    colore: "#ff9100"
  },
  mezzi: {
    dati: [
      { key: "camion", livello: 50 },
      { key: "ruspa", livello: 20 },
      { key: "asflatrice", livello: 60 }
    ],
    colore: "#ecebbd"
  },
  materiali: {
    dati: [
      { key: "cemento", livello: 35 },
      { key: "mattobi", livello: 35 },
      { key: "soldi", livello: 35 }
    ],
    colore: "#66ccff"
  },
  ricavi: {
    dati: [
      { key: "canone", livello: 35 },
      { key: "fattura", livello: 35 },
      { key: "nero", livello: 35 }
    ],
    colore: "#d3ffce"
  }
};
// TODO: fare tipo qui sotto
const data = Object.values(mentions).reduce(
  (acc, { dati, colore }) => [
    ...acc,
    ...dati.map((d) => ({ name: d.key, colore, livello: d.livello * 2 }))
  ],
  []
);

function createImage($string, dim, colore) {
  let drawing = document.createElement("canvas");

  drawing.width = dim * 4;
  drawing.height = dim * 4;

  let ctx = drawing.getContext("2d");

  ctx.fillStyle = colore;
  //ctx.fillRect(0, 0, 150, 150);
  ctx.beginPath();
  ctx.arc(dim * 2, dim * 2, dim * 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#000";
  ctx.font = `${2}rem sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText($string, dim * 2, dim * 2 + 10);
  //ctx.strokeText("Canvas Rocks!", 5, 130);

  return drawing.toDataURL("image/png");
}

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
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      positionIterations: 5
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 400,
        height: 300,
        wireframes: false,
        background: "#f4f4f8"
      }
    });

    const dati = data.map((item) =>
      Bodies.circle(200, 100, item.livello, {
        render: {
          sprite: {
            texture: createImage(item.name, item.livello + 5, item.colore),
            xScale: 0.4,
            yScale: 0.4
          },
          text: { content: item.name }
        }
      })
    );

    World.add(engine.world, [
      // walls
      Bodies.rectangle(0, 0, 800, 10, {
        isStatic: true,
        render: { fillStyle: "#f4f4f8" }
      }),
      Bodies.rectangle(0, 600, 800, 10, {
        isStatic: true,
        render: { fillStyle: "#f4f4f8" }
      }),
      Bodies.rectangle(0, 0, 10, 1200, {
        isStatic: true,
        render: { fillStyle: "#f4f4f8" }
      }),
      Bodies.rectangle(400, 0, 10, 1200, {
        isStatic: true,
        render: { fillStyle: "#f4f4f8" }
      })
    ]);

    World.add(engine.world, dati);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
     
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    return <div ref="scene" />;
  }
}
export default Scene;
