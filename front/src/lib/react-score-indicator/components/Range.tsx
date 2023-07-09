"use client";

import React, { useEffect } from "react";

import hex2rgba from "../utils/hex2rgba";
import { NextPage } from "next";

interface Props {
  scoreNumber: number;
  width?: number;
  lineWidth?: number;
  lineGap?: number;
  maxAngle?: number;
  rotation?: number;
  stepsColors: string[];
  fadedOpacity?: number;
}

const Range: NextPage<Props> = ({
  width = 200,
  lineWidth = 5,
  lineGap = 5,
  maxAngle = 260,
  rotation = 90,
  fadedOpacity = 40,
  scoreNumber,
  stepsColors,
}) => {
  const canvas = React.createRef<any>();

  useEffect(() => {
    const devicePixelRatio = window.devicePixelRatio;
    const ctx = canvas.current.getContext("2d");

    draw(ctx, devicePixelRatio);
  }, []);

  const draw = (ctx: any, devicePixelRatio: number) => {
    if (!ctx || !devicePixelRatio) return;

    // change size canvas when HDPI screen
    const pixelRatio = devicePixelRatio;
    const wRatio = width * pixelRatio;
    canvas.current.width = wRatio;
    canvas.current.height = wRatio;

    const halfWidth = wRatio / 2;
    const pieSize = maxAngle / stepsColors.length;
    let lastval = 0;

    ctx.clearRect(halfWidth * -1, halfWidth * -1, wRatio, wRatio);
    ctx.resetTransform();

    ctx.translate(wRatio / 2, wRatio / 2);
    ctx.rotate(
      Math.PI * 2 * ((rotation + (360 - maxAngle - lineGap) / 2) / 360)
    );

    for (let i = 0; i < stepsColors.length; i++) {
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        halfWidth - (lineWidth * pixelRatio) / 2,
        Math.PI * 2 * ((lastval + lineGap) / 360),
        Math.PI * 2 * ((lastval + pieSize) / 360)
      );
      lastval += pieSize;
      if (scoreNumber < i + 1)
        ctx.strokeStyle = hex2rgba(stepsColors[i], fadedOpacity);
      else ctx.strokeStyle = stepsColors[i];
      ctx.lineWidth = lineWidth * pixelRatio;
      ctx.stroke();
    }
  };

  return (
    <canvas
      className={"rangeSvg"}
      ref={canvas}
      style={{ width }}
      width={width}
      height={width}
    />
  );
};

export default Range;
