import drawHand from "./drawHand";

const drawTime = (context, radius, style) => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();

  //Clock Hand - Hour
  hour = hour % 12;
  hour = (hour * Math.PI) / 6;
  context.strokeStyle = style;

  //Draw Hand function
  drawHand(context, hour, radius * 0.5, radius * 0.04);

  //Clock Hand - Minute
  minute = (minute * Math.PI) / 30;
  
  //Draw Hand function
  drawHand(context, minute, radius * 0.75, radius * 0.03);
};

export default drawTime;
