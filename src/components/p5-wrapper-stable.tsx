"use client";

import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";
import { useEffect, useState } from "react";


export default function P5WrapperStable({
  sketch,
  answerValues,
}: {
  sketch: Sketch;
  answerValues: FormAnswerType[];
}) {

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(400);
 

  useEffect(() => {
    const updateSketchSize = () => {
      if (window !== undefined) {
        if (window.innerWidth < 768) {
          setWidth(200);
          setHeight(500)
        } else {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight)
        }
      }
    };
  
    updateSketchSize();
    window.addEventListener("resize", updateSketchSize);
  
    const interval = setInterval(() => {
     
    }, 10000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSketchSize);
    };
  }, []);


  return (
    <NextReactP5Wrapper
      sketch={sketch}
      values={answerValues}
      width={width}
      height = {height}
    />
  );
}
