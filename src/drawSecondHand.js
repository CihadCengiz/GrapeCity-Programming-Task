import drawHand from "./drawHand";

const drawSecondHand = (context, radius) => {
  // second
  var now = new Date();
  var second = now.getSeconds();
  second = (second * Math.PI) / 30;
  context.strokeStyle = "orange";
  drawHand(context, second, radius * 0.8, radius * 0.01);
};

export default drawSecondHand;
