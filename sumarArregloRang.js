function sumarArreglo(numeros, inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  console.log(sumarArreglo([1, 2, 3, 4, 5], 0, 2)); // 6 (suma de 1, 2 y 3)
  console.log(sumarArreglo([1, 2, 3, 4, 5], 1, 3)); // 9 (suma de 2, 3 y 4)
  console.log(sumarArreglo([1, 2, 3, 4, 5], 0, 4)); // 15 (suma de todos los elementos)
    