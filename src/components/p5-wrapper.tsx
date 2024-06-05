'use client'

import React, { useEffect, useState } from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";

export default function P5Wrapper({sketch, props}: {sketch: Sketch, props: number[]}) {

  return <NextReactP5Wrapper sketch={sketch} values={props}/>;
}