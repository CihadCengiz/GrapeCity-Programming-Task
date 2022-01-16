import drawHand from "./drawHand";

const drawTime = (context, radius, style) => {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI) / 6;
  context.strokeStyle = style;
  drawHand(context, hour, radius * 0.5, radius * 0.04);
  //minute
  minute = (minute * Math.PI) / 30;
  drawHand(context, minute, radius * 0.75, radius * 0.03);
};

export default drawTime;
