function numeroDeCaracteres(cadena, caracter) {
    if (!caracter) return 0;
    return (cadena.toLowerCase().match(new RegExp(caracter, "g")) || []).length;
  }

console.log(numeroDeCaracteres("Hola", "a")); // 1
console.log(numeroDeCaracteres("casa", "s")); //1
console.log(numeroDeCaracteres("Ana", "a")); // 2
console.log(numeroDeCaracteres("Árbol", "o")); // 1
console.log(numeroDeCaracteres("Hola", "")); // 0
