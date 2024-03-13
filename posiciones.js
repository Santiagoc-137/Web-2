function posiciones(numeros) {
    const posicionesPares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        posicionesPares.push(i);
      }
    }
    return posicionesPares;
  }
  console.log(posiciones([1, 2, 3, 4, 5])); // [1, 3]
  console.log(posiciones([10, 15, 20, 25, 30])); // [0, 2, 4]
  console.log(posiciones([0, 1, 2, 3, 4])); // [0, 2, 4]
    