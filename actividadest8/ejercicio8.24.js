function testFunc() {
  try {
    console.log("En el bloque try");
    return "Valor desde el bloque try";
  } catch (error) {
    console.log("En el bloque catch");
    return "Valor desde el bloque catch";
  } finally {
    console.log("En el bloque finally");
    return "Valor desde el bloque finally";
  }
}

try {
  const resultado = testFunc();
  console.log("Resultado:", resultado);
} catch (error) {
  console.log("Error capturado:", error.message);
}
