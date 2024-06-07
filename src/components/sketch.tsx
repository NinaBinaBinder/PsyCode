"use client";
import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { Sketch, SketchProps } from "react-p5-wrapper";

type MySketchProps = SketchProps & {
  values: FormAnswerType[];
  size: number;
};

export const sketch: Sketch<MySketchProps> = (p5) => {
  let values: FormAnswerType[] = [];
  let size: number = 200;
  let pulse: number = 0;

  p5.updateWithProps = (props) => {
    if (props.values) {
      values = props.values;
    }
    if (props.size) {
      size = props.size;
      p5.resizeCanvas(size, size / 2);
    }
  };

  p5.setup = () => {
    p5.createCanvas(200, 200, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB, 100, 100, 100, 100);
    p5.noFill();
    p5.strokeWeight(0.5);
    p5.pixelDensity(1);
  };
  p5.draw = () => {
    p5.background(0);
    p5.orbitControl(4, 4);
    p5.rotateX(65);
    pulse += 0.01;

    let sumValues1 = values
      .slice(0, 5)
      .reduce((acc, val) => acc + val.answerValue, 0);
    let hue1 = 50 + (sumValues1 / 500) * 50;
    let saturation1 = 80 + sumValues1 / 25;
    let abstract1 = sumValues1 / 50;
    drawIrregularShape(
      size / 4,
      hue1,
      saturation1,
      90,
      abstract1 / 10,
      abstract1 + sumValues1 / 100,
      abstract1 + sumValues1 / 100,
      pulse
    );

    let sumValues2 =
      values[5].answerValue +
      values[6].answerValue +
      values[7].answerValue +
      values[8].answerValue -
      values[9].answerValue;
    let hue2 = 60 + (sumValues2 / 500) * 40;
    let saturation2 = 80 + sumValues1 / 25;
    let abstract2 = sumValues2 / 50;

    drawIrregularShape(
      size / 5,
      hue2,
      saturation2,
      90,
      abstract2 / 5,
      abstract2,
      abstract2,
      pulse
    );

    let sumValues3 = values
      .slice(10, 14)
      .reduce((acc, val) => acc + val.answerValue, 0);
    let hue3 = 20 + (sumValues3/ 50) * 5 ;
    console.log(hue3)
    let brightness3 = 100 - (0.06 * sumValues3);
    let abstract3 = sumValues3 / 50;

    drawIrregularShape(
      size / 7,
      hue3,
      100,
      brightness3,
      abstract3 ,
      abstract3,
      abstract3,
      pulse
    );

    let sumValues4 = values
      .slice(15, 19)
      .reduce((acc, val) => acc + val.answerValue, 0);
    let hue4 = (sumValues4 / 500) * 21;
    let saturation4 = 60 + sumValues3 / 25;
    let abstract4 = sumValues4 / 50;

    drawIrregularShape(
      size / 30,
      hue4,
      saturation4,
      100,
      abstract4,
      abstract4,
      abstract4,
      pulse
    );

    let sumValues5 = values
      .slice(20, 25)
      .reduce((acc, val) => acc + val.answerValue, 0);
    let hue5 = 20 + sumValues5 / 50 + 7;
    let saturation5 = 30 + (sumValues5 / 500) * 70;
    let abstract5 = sumValues5 / 50;

    drawIrregularShape(
      20,
      hue5,
      100,
      100,
      abstract5,
      abstract5,
      abstract5 * 2,
      pulse
    );
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
