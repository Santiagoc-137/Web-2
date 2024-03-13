function numAsteriscos(matriz) {
    let numAsteriscos = 0;
    for (const fila of matriz) {
      for (const elemento of fila) {
        if (typeof elemento === "string" && elemento === "*") {
          numAsteriscos++;
        }
      }
    }
    return numAsteriscos;
  }
  const matriz = [
    ["Hola", "mundo", "*"],
    ["*", "adiós", "*"],
    ["amor", "es", "*"],
  ];
  
  console.log(numAsteriscos(matriz)); // 6
    