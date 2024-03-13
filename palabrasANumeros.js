function palabrasANumeros(palabras) {
    const numeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const palabrasNumeros = [];
    for (const palabra of palabras) {
      const indice = numeros.indexOf(palabra);
      if (indice !== -1) {
        palabrasNumeros.push(indice);
      } else {
        palabrasNumeros.push(-1);
      }
    }
    return palabrasNumeros;
  }
  console.log(palabrasANumeros(["uno", "dos", "tres", "cuatro", "cinco"])); // [1, 2, 3, 4, 5]
  console.log(palabrasANumeros(["cero", "nueve", "ocho", "siete", "seis"])); // [0, 9, 8, 7, 6]
  console.log(palabrasANumeros(["hola", "mundo", "adiós", "amor", "es"])); // [-1, -1, -1, -1, -1]
    