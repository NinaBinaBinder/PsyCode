"use client";

import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function P5Wrapper({
  sketch,
  answerValues,
}: {
  sketch: Sketch;
  answerValues: FormAnswerType[];
}) {
  const [sketchSize, setSketchSize] = useState(2000);
  const router = useRouter()

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
  
    updateSketchSize();
    window.addEventListener("resize", updateSketchSize);
  
    const interval = setInterval(() => {
      console.log('Reloading page');
      window.location.reload(); 
    }, 10000);
  
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSketchSize);
    };
  }, []);
  

  return (
    <NextReactP5Wrapper
      className={"h-[20vh]"}
      sketch={sketch}
      values={answerValues}
      size={sketchSize}
    />
  );
}
