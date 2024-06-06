"use client";
import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { Sketch, SketchProps } from "react-p5-wrapper";

type MySketchProps = SketchProps & {
  values: FormAnswerType[];
  size: number;
};

export const sketch: Sketch<MySketchProps> = (p5) => {
  let values: FormAnswerType[] = [];
  let size: number = 20;
  let pulse: number = 0;

  p5.updateWithProps = (props) => {
    if (props.values) {
      values = props.values;
    }
    if (props.size) {
      size = props.size;
      p5.resizeCanvas(size, size);
    }
  };

  p5.setup = () => {
    p5.createCanvas(size*2, size, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB, 100, 100, 100, 100);
    p5.noFill();
    p5.pixelDensity(1);
  };
  p5.draw = () => {
    p5.background(0);
    p5.orbitControl(4, 4); // Mouse control
    p5.rotateX(60);
    pulse += 0.01;
    // Define parameters for each shape
    
    //console.log(shapes)

    //drawIrregularShape(size, hue, saturation, brightness bumpiness, thetaValue, phyValue, pulse);

    drawIrregularShape(
      size / 10,
      values[0].answerValue,
      100,
      100,
      10,
      2,
      1,
      pulse
    );

    // Draw each shape
    /*
    for (let i = 1; i < shapes.length ; i++) {
      const shape = shapes[i];
      const hue = values[shape.hueIndex];
     // console.log(i, values[shape.hueIndex])
      const saturation = 100;
      const brightness = 100;
      const bumpiness = 5;
      const thetaValue = 50;
      const phyValue = 10;

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
    }*/
  };

  function drawIrregularShape(
    r: number,
    hue: number,
    saturation: number,
    brighntess: number,
    bumpiness: number,
    thetaValue: number,
    phyValue: number,
    pulse: number
  ) {
    p5.stroke(hue, saturation, brighntess, 100);
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
