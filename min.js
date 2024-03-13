function min(numeros) {
    let minimo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < minimo) {
        minimo = numeros[i];
      }
    }
    return minimo;
  }
  console.log(min([1, 2, 3, 4, 5])); // 1
  console.log(min([10, 20, 30, 40, 50])); // 10
  console.log(min([0, 0, 0, 0])); // 0
    