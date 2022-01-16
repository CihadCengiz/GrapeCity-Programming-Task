//Draw Clock Numbers
const drawNumbers = (context, radius, style) => {
  radius = radius * 0.9;
  let ang;
  context.font = radius * 0.2 + "px arial";
  context.textBaseline = "middle";
  context.textAlign = "center";
  for (let num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    context.rotate(ang);
    context.translate(0, -radius * 0.85);
    context.rotate(-ang);
    context.fillStyle = style;
    context.fillText(num.toString(), 0, 0);
    context.rotate(ang);
    context.translate(0, radius * 0.85);
    context.rotate(-ang);
  }
};

export default drawNumbers;
