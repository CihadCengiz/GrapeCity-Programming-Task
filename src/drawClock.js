import drawFace from "./drawFace";
import drawTime from "./drawTime";
import drawNumbers from "./drawNumbers";

const drawClock = (context) => {
  drawFace(context, context.canvas.height / 2, style);
  drawNumbers(context, context.canvas.height / 2);
  drawTime(context, context.canvas.height / 2);
};

export default drawClock;
