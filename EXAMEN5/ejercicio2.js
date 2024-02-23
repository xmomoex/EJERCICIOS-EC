document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const center = { x: canvas.width / 2, y: canvas.height / 2 };

  //creamos el triangulo blanco
  ctx.beginPath();
  ctx.lineJoin = "round";
  ctx.moveTo(center.x - 150, center.y + 150);
  ctx.lineTo(center.x, center.y - 120);
  ctx.lineTo(center.x + 150, center.y + 150);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();

  //creamos el borde rojo
  ctx.lineWidth = 28;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
  ctx.save();

  //creamos el simbolo de dentro
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(232, 220);
  ctx.lineTo(268, 220);
  ctx.lineTo(260, 310);
  ctx.lineTo(240, 310);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.lineJoin = "round";
  ctx.moveTo(250, 220);
  ctx.lineTo(250, 310);
  ctx.closePath();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(250, 350, 7, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(250, 220, 17.6, 0, 2 * Math.PI);

  ctx.fill();
});
