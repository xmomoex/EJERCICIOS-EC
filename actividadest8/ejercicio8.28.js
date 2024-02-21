document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("mitsubishiLogo");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Establece el color de relleno
    ctx.fillStyle = "#E60012"; // Rojo Mitsubishi

    // Dibuja los tres diamantes
    // Cada diamante se dibuja usando dos triángulos

    // Diamante superior
    drawDiamond(ctx, 300, 150, 100);

    // Diamante inferior izquierdo
    drawDiamond(ctx, 200, 300, 100);

    // Diamante inferior derecho
    drawDiamond(ctx, 400, 300, 100);
  }
});

function drawDiamond(ctx, centerX, centerY, size) {
  const height = (Math.sqrt(3) / 2) * size; // Altura de un triángulo equilátero

  // Triángulo superior
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - height / 2); // Punto superior
  ctx.lineTo(centerX - size / 2, centerY + height / 2); // Esquina inferior izquierda
  ctx.lineTo(centerX + size / 2, centerY + height / 2); // Esquina inferior derecha
  ctx.closePath();
  ctx.fill();

  // Triángulo inferior (invertido)
  ctx.beginPath();
  ctx.moveTo(centerX, centerY + height / 2); // Punto inferior
  ctx.lineTo(centerX - size / 2, centerY - height / 2); // Esquina superior izquierda
  ctx.lineTo(centerX + size / 2, centerY - height / 2); // Esquina superior derecha
  ctx.closePath();
  ctx.fill();
}
