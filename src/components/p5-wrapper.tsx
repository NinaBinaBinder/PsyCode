'use client'

import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";
import { useEffect, useState } from "react";

export default function P5Wrapper({sketch, answerValues, size}: {sketch: Sketch, answerValues: FormAnswerType[], size: number}) {
const [sketchSize, setSketchSize]= useState(2000)

useEffect(() => {
  const updateSketchSize = () => {
    if (window !== undefined) {
      if (window.innerWidth < 768) { 
        setSketchSize(500);
      } else {
        setSketchSize(window.innerWidth);
      }
    }
  };

  updateSketchSize(); // Update initially
  window.addEventListener('resize', updateSketchSize); // Update on resize

  const interval = setInterval(() => {
    window.location.reload();
  }, 100000);

  return () => {
    clearInterval(interval);
    window.removeEventListener('resize', updateSketchSize);
  };
}, []);

  
  return <NextReactP5Wrapper sketch={sketch} values={answerValues} size={sketchSize}/>;
}

