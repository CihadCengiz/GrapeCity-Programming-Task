import drawHand from "./drawHand";

//Clock Hands - Second
const drawSecondHand = (context, radius) => {
  let now = new Date();
  let second = now.getSeconds();
  second = (second * Math.PI) / 30;
  context.strokeStyle = "orange";
  
  //Draw Hand function
  drawHand(context, second, radius * 0.8, radius * 0.01);
};

export default drawSecondHand;
