function pares(numeros) {
    const pares = [];
    for (const numero of numeros) {
      if (numero % 2 === 0) {
        pares.push(numero);
      }
    }
    return pares;
  }
  console.log(pares([1, 2, 3, 4, 5])); // [2, 4]
  console.log(pares([10, 15, 20, 25, 30])); // [10, 20, 30]
  console.log(pares([0, 1, 2, 3, 4])); // [0, 2, 4]
    