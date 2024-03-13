function terminanConS(palabras) {
    const palabrasConS = [];
    for (const palabra of palabras) {
      if (/[sS]$/.test(palabra)) {
        palabrasConS.push(palabra);
      }
    }
    return palabrasConS;
  }

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []