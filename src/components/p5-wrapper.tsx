'use client'

import React, { useEffect, useState } from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";
import { AnswerType, PersonType } from "@/db/schema";
import { useLocalStorage } from 'usehooks-ts'

export default function P5Wrapper({sketch, props}: {sketch: Sketch, props: AnswerType[]}) {
 const [answers, setAnswers] = useLocalStorage<AnswerType[]>('answers', props)

  console.log('test', localStorage.getItem('answers'))

  return <NextReactP5Wrapper sketch={sketch} />;
}