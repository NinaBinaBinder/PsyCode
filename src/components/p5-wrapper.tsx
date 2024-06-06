'use client'

import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";
import { useState } from "react";

export default function P5Wrapper({sketch, answerValues, size}: {sketch: Sketch, answerValues: FormAnswerType[], size: number}) {
const [sketchSize, setSketchSize]= useState(2000)


 /* setTimeout(function(){

    if(window !== undefined){
      window.location.reload();
      setSketchSize(window.innerWidth)
}
 }, 100000);*/
  
  return <NextReactP5Wrapper sketch={sketch} values={answerValues} size={sketchSize}/>;
}

