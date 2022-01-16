const drawHand = (context, pos, length, width) => {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(0, 0);
  context.rotate(pos);
  context.lineTo(0, -length);
  context.stroke();
  context.rotate(-pos);
};

export default drawHand;
