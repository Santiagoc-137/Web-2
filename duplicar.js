function duplicar(numeros) {
    const duplicados = [];
    for (const numero of numeros) {
      duplicados.push(numero * 2);
    }
    return duplicados;
  }
  console.log(duplicar([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
  console.log(duplicar([10, 15, 20, 25, 30])); // [20, 30, 40, 50, 60]
  console.log(duplicar([0, 1, 2, 3, 4])); // [0, 2, 4, 6, 8]
    