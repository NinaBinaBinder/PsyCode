"use client";

export type SketchParams = {
  val11: number;
  val12: number;
  val13: number;
  val14: number;
  val15: number;
  val21: number;
  val22: number;
  val23: number;
  val24: number;
  val25: number;
  val31: number;
  val32: number;
  val33: number;
  val34: number;
  val35: number;
  val41: number;
  val42: number;
  val43: number;
  val44: number;
  val45: number;
  val51: number;
  val52: number;
  val53: number;
  val54: number;
  val55: number;
};

//export function sketch(p5, val11, val12, val13, val14, val15, val21, val22, val23, val24, val25, val31, val32, val33, val34, val35 , val41, val42, val43, val44, val45, val51, val52, val53, val54, val55) {

//export function sketch(p5 : P5CanvasInstance,  {params}: SketchParams): Sketch{
//export function sketch({p5, val11, val12, val13, val14, val15 }: {p5: any, val11: number, val12: number, val13: number, val14: number, val15: number}): Sketch{
export const sketch: Sketch<MySketchProps> = (p5) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let pulse: number = 0;

  let values = [];

  function drawShape(
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number
  ) {
    let abstract = value1;
    let hue = 210 + value2 + value3 + value4 + value5;
    let saturation = 80 + value2 / 30 + value3 / 30 + value3 / 30 + value4 / 30;
    let brightness = 70 + value1 / 30 + value2 / 30 + value3 / 30 + value4 / 30;
    let fillcolor = p5.color(hue, saturation, brightness, 100);

    p5.fill(fillcolor);
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
    p5.background(0);
    pulse += 0.005;
    drawShape(1, 2, 3, 4, 5);
    /*drawShape(val21, val22, val23, val24, val25);
    drawShape(val31, val32, val33, val34, val35);
    drawShape(val41, val42, val43, val44, val45);
    drawShape(val51, val52, val53, val54, val55);*/
  };

  return sketch;
};
