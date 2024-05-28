import { type Sketch } from "@p5-wrapper/react";

export const sketch: Sketch = (p5) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let pulse: number = 0;
  const random = p5.random(2,8)

  function drawShape(
    abstract: number,
    hue: number,
    saturation: number,
    brightness: number
  ) {
    p5.fill(p5.color(hue, saturation, brightness, 100));
    p5.noStroke();
    p5.beginShape();
    for (let angle = 0; angle < p5.TWO_PI; angle += 0.1) {
      let xoff = p5.map(p5.cos(angle + pulse), -1, 1, 0, abstract);
      let yoff = p5.map(p5.sin(angle + pulse), -1, 1, 0, abstract);
      let r = p5.map(p5.noise(xoff, yoff), 0, 1, 50, 200);
      let x = r * p5.cos(angle);
      let y = r * p5.sin(angle);
      p5.curveVertex(x, y);
    }
    p5.endShape(p5.CLOSE);
  }

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
    p5.colorMode(p5.HSB, 360, 100, 100, 100);
  };

  p5.draw = () => {
    p5.background(220, 1, 96);
    pulse += 0.005;
    drawShape(random, 0, 20, 100);
  };

  return sketch;
};
