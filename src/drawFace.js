//Clock Face
const drawFace = (context, radius, style) => {
  radius = radius * 0.9;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.fillStyle = style;
  context.beginPath();
  context.arc(0, 0, radius, 0, 2 * Math.PI);
  context.fill();
};

export default drawFace;
