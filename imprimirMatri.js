function imprimirMatriz(matriz) {
    for (const fila of matriz) {
      for (const elemento of fila) {
        console.log(elemento);
      }
    }
  }
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  imprimirMatriz(matriz);
    