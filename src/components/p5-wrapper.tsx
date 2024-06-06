'use client'

import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";

export default function P5Wrapper({sketch, answerValues, size}: {sketch: Sketch, answerValues: FormAnswerType[], size: number}) {

  setTimeout(function(){
    window.location.reload();
 }, 100000);
  
  return <NextReactP5Wrapper sketch={sketch} values={answerValues} size={window.outerHeight}/>;
}