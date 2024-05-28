'use client'

import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { sketch } from "./sketch";

export default function P5Wrapper() {
  return <NextReactP5Wrapper sketch={sketch} />;
}