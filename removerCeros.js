function removerCeros(numeros) {
    const nuevoArreglo = [];
    for (const numero of numeros) {
      if (numero !== 0) {
        nuevoArreglo.push(numero);
      }
    }
    return nuevoArreglo;
  }
  console.log(removerCeros([1, 0, 2, 3, 0])); // [1, 2, 3]
  console.log(removerCeros([0, 0, 0, 0])); // []
  console.log(removerCeros([10, 20, 30])); // [10, 20, 30]
    