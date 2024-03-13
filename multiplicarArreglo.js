function multiplicarArreglo(numeros) {
    let producto = 1;
    for (const numero of numeros) {
      producto *= numero;
    }
    return producto;
  }
  console.log(multiplicarArreglo([1, 2, 3])); // 6
  console.log(multiplicarArreglo([4, 5, 6])); // 120
  console.log(multiplicarArreglo([10, 20, 30])); // 6000
    