function sumarArreglo(numeros) {
    let suma = 0;
    for (const numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  console.log(sumarArreglo([1, 2, 3])); // 6
  console.log(sumarArreglo([4, 5, 6])); // 15
  console.log(sumarArreglo([10, 20, 30])); // 60
    