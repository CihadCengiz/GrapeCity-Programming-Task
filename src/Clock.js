import React, { useRef, useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import drawFace from "./drawFace";
import drawTime from "./drawTime";
import drawNumbers from "./drawNumbers";
import drawSecondHand from "./drawSecondHand";

const Clock = () => {
  const canvas = useRef(null);
  const [secondHandVisible, setSecondHandVisible] = useState(true);
  const currentTime = new Date().getHours();
  const [style, setStyle] = useState(
    currentTime >= 8 && currentTime <= 17 ? "white" : "black"
  );
  const [isMounted, setMounted] = useState(false);

  let context = null;
  let radius = null;
  let intervalTimer = 1000;

  const drawClock = (context) => {
    drawFace(context, context.canvas.height / 2, style);
    drawNumbers(
      context,
      context.canvas.height / 2,
      style === "white" ? "black" : "white"
    );
    drawTime(
      context,
      context.canvas.height / 2,
      style === "white" ? "black" : "white"
    );
  };

  const handleChange = () => {
    setSecondHandVisible(!secondHandVisible);
  };

  // initialize the canvas context
  useEffect(() => {
    if (currentTime >= 8 && currentTime <= 17) setStyle("white");
    const clock = canvas.current;
    context = clock.getContext("2d");
    if (!isMounted) radius = context.canvas.height / 2;
    context.translate(radius, radius);

    const interval = setInterval(() => {
      if (secondHandVisible) {
        drawClock(context);
        drawSecondHand(context, context.canvas.height / 2);
        intervalTimer = 1000;
      } else {
        drawClock(context);
        intervalTimer = 60000;
      }
    }, intervalTimer);

    if (!isMounted) {
      drawClock(context);
      drawSecondHand(context, context.canvas.height / 2);
      setMounted(true);
    }

    return () => clearInterval(interval);
  }, [secondHandVisible]);

  return (
    <div>
      <canvas width={500} height={500} ref={canvas}></canvas>
      <CheckBox onParamChange={handleChange} />
    </div>
  );
};

export default Clock;
