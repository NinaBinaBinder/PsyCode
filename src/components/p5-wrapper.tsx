'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { Sketch } from "@p5-wrapper/react";

export default function P5Wrapper({sketch}: {sketch: Sketch }) {
  return <NextReactP5Wrapper sketch={sketch} />;
}