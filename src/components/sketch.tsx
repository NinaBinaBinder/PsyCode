"use client";
import { Sketch, SketchProps } from "react-p5-wrapper";

type MySketchProps = SketchProps & {
  values: number[];
};

export const sketch: Sketch<MySketchProps> = (p5) => {
  let values: number[] = [];
  const width = window.innerWidth;
  const height = window.innerHeight;
  let pulse: number = 0;

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB, 100, 100, 100, 100); // Adding alpha to colorMode
    p5.noFill();
    p5.pixelDensity(2);
  };

  p5.updateWithProps = (props) => {
    if (props.values) {
      values = props.values;
    }
  };

  p5.draw = () => {
    // Set the background color (HSB mode: hue, saturation, brightness)
    p5.background(0, 0, 0); // Adjust the HSB values as needed
    p5.orbitControl(4, 4); // Mouse control
    p5.rotateX(60);
    pulse += 0.01;

    // Define parameters for each shape
    const shapes = [
      {
        hueIndex: 0,
        satIndex: 1,
        briIndex: 2,
        bumpIndex: 3,
        thetaIndex: 4,
        phyIndex: 5,
        sizeIndex: 1,
      },
      {
        hueIndex: 7,
        satIndex: 8,
        briIndex: 9,
        bumpIndex: 10,
        thetaIndex: 11,
        phyIndex: 12,
        sizeIndex: 4,
      },
      {
        hueIndex: 14,
        satIndex: 15,
        briIndex: 16,
        bumpIndex: 17,
        thetaIndex: 18,
        phyIndex: 19,
        sizeIndex: 5,
      },
      {
        hueIndex: 21,
        satIndex: 22,
        briIndex: 23,
        bumpIndex: 24,
        thetaIndex: 25,
        phyIndex: 26,
        sizeIndex: 8,
      },
      {
        hueIndex: 28,
        satIndex: 29,
        briIndex: 30,
        bumpIndex: 31,
        thetaIndex: 32,
        phyIndex: 33,
        sizeIndex: 10,
      },
    ];
    //console.log(shapes)

    // Draw each shape
    for (let i = 1; i < shapes.length - 1; i++) {
      const shape = shapes[i];
      const hue = values[shape.hueIndex] ?? 120;
      const saturation = 30;
      const brightness = 100;
      const bumpiness = 5;
      const thetaValue = 5;
      const phyValue = 5;

      let size;
      if (i === 0) {
        size = 100; // First shape size
      } else if (i === shapes.length - 1) {
        size = 10; // Last shape size
      } else {
        // Scale sizes for intermediate shapes between 100 and 10
        size = 100 - (90 * i) / (shapes.length - 1);
      }

      //console.log(i, 'hue: ', hue, 'saturation: ', saturation, 'brighntess: ', brightness, 'size: ', size)

      p5.strokeWeight(3);
      p5.stroke(hue, saturation, brightness, 80); // Set stroke color with opacity 40
      p5.fill(hue, saturation, brightness, 80); // Set fill color with opacity 40
      drawIrregularShape(size, bumpiness, thetaValue, phyValue, pulse);
    }
  };

  function drawIrregularShape(
    r: number,
    bumpiness: number,
    thetaValue: number,
    phyValue: number,
    pulse: number
  ) {
    p5.beginShape(p5.POINTS);
    for (let theta = 0; theta < 180; theta += 2) {
      for (let phy = 0; phy < 360; phy += 2) {
        let noiseFactor = p5.noise(theta * 0.1 + pulse, phy * 0.1 + pulse); // Adding noise for irregularity with pulse
        let x =
          r *
          (1 +
            bumpiness *
              p5.sin(thetaValue * theta) *
              p5.sin(phyValue * phy) *
              noiseFactor) *
          p5.sin(theta) *
          p5.cos(phy);
        let y =
          r *
          (1 +
            bumpiness *
              p5.sin(thetaValue * theta) *
              p5.sin(phyValue * phy) *
              noiseFactor) *
          p5.sin(theta) *
          p5.sin(phy);
        let z =
          r *
          (1 +
            bumpiness *
              p5.sin(thetaValue * theta) *
              p5.sin(phyValue * phy) *
              noiseFactor) *
          p5.cos(theta);
        p5.vertex(x, y, z);
      }
    }
    p5.endShape();
  }

  return sketch;
};
