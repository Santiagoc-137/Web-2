function numerosAPalabras(numeros) {
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const numerosPalabras = [];
    for (const numero of numeros) {
      if (numero >= 0 && numero <= 9) {
        numerosPalabras.push(palabras[numero]);
      } else {
        numerosPalabras.push("Número fuera del rango (0-9)");
      }
    }
    return numerosPalabras;
  }

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
  console.log(numerosAPalabras([-1, 10, 11, 12, 13])); // ["Número fuera del rango (0-9)", "Número fuera del rango (0-9)", "Número fuera del rango (0-9)", "Número fuera del rango (0-9)", "Número fuera del rango (0-9)"]
    