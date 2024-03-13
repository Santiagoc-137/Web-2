function max(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];
      }
    }
    return maximo;
  }
  console.log(max([1, 2, 3, 4, 5])); // 5
  console.log(max([10, 20, 30, 40, 50])); // 50
  console.log(max([0, 0, 0, 0])); // 0
    