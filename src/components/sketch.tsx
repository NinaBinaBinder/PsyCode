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

  function getShapeValues(shapeNumber: number) {
    return values.filter((values) => values.questionId === String(shapeNumber));
  }

  p5.setup = () => {
    p5.createCanvas(size * 2, size, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSB, 100, 100, 100, 100);
    p5.noFill();
    p5.pixelDensity(1);
  };
  p5.draw = () => {
    p5.orbitControl(4, 4); // Mouse control
    p5.rotateX(60);
    pulse += 0.01;
    // Define parameters for each shape

    //console.log(shapes)
    let sumValues1 =
      values[0].answerValue +
      values[1].answerValue +
      values[2].answerValue +
      values[3].answerValue +
      values[4].answerValue;
    let hue1 = 120 + (sumValues1 / 500) * 210;
    let saturation1 = 40 + (sumValues1 / 500) * 60;
    let brightness1 = 40 + (sumValues1 / 500) * 60;
    let abstract1 = sumValues1 / 400;

    let sumValues2 =
      values[5].answerValue +
      values[6].answerValue +
      values[7].answerValue +
      values[8].answerValue +
      values[9].answerValue;
    let hue2 = 120 + (sumValues2 / 500) * 210;
    let saturation2 = 40 + (sumValues2 / 500) * 60;
    let brightness2 = 40 + (sumValues2 / 500) * 60;
    let abstract2 = sumValues2 / 500;

    let sumValues3 =
      values[10].answerValue +
      values[11].answerValue +
      values[12].answerValue +
      values[13].answerValue +
      values[14].answerValue;
    let hue3 = 60 + (sumValues3 / 500) * 300;
    let saturation3 = 40 + (sumValues3 / 500) * 60;
    let brightness3 = 90 + (sumValues3 / 500) * 10;
    let abstract3 = sumValues3 / 500;

    let sumValues4 =
      values[15].answerValue +
      values[16].answerValue +
      values[17].answerValue +
      values[18].answerValue +
      values[19].answerValue;
    let hue4 = 60 + (sumValues4 / 500) * 210;
    let saturation4 = 30 + (sumValues4 / 500) * 70;
    let brightness4 = 90 - (sumValues4 / 500) * 40;
    let abstract4 = sumValues4 / 500;

    let sumValues5 =
      values[20].answerValue +
      values[21].answerValue +
      values[22].answerValue +
      values[23].answerValue +
      values[24].answerValue;
    let hue5 = 60 + (sumValues5 / 500) * 210;
    let saturation5 = 30 + (sumValues5 / 500) * 70;
    let brightness5 = 90 - (sumValues5 / 500) * 40;
    let abstract5 = sumValues5 / 500;



    let backgroundColor = (hue1 + hue2 +hue3 + hue4 + hue5)/ 5;
    console.log(backgroundColor);
        p5.background(backgroundColor, 100, 80, 100);


    //drawIrregularShape(size, hue, saturation, brightness bumpiness, thetaValue, phyValue, pulse);

    

    drawIrregularShape(size/ 4, hue1, saturation1, 100, abstract1, abstract1, abstract1, pulse);


    

    drawIrregularShape(size / 5, hue2, saturation2, 100, abstract2, abstract2, abstract2, pulse);


    
    drawIrregularShape(size / 7, hue3, saturation3, 100, abstract3, abstract3, abstract3, pulse);


    

    drawIrregularShape(size / 9, hue4, saturation4, 100, abstract4, abstract4, abstract4, pulse);


    
    drawIrregularShape(size / 20, 20, saturation5, 100, abstract5, abstract5, abstract5, pulse);



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
