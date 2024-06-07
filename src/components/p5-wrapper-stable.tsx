"use client";

import { FormAnswerType } from "@/app/test/[personId]/result/[name]/page";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";


export default function P5WrapperStable({
  sketch,
  answerValues,
}: {
  sketch: Sketch;
  answerValues: FormAnswerType[];
}) {


  return (
    <NextReactP5Wrapper
      className={"h-[20vh]"}
      sketch={sketch}
      values={answerValues}
      size={2000}
    />
  );
}
