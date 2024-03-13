function empiezanConA(palabras) {
    const palabrasConA = [];
    for (const palabra of palabras) {
      if (/[aA]/.test(palabra[0])) {
        palabrasConA.push(palabra);
      }
    }
    return palabrasConA;
  }

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
    