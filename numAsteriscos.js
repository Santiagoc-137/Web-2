function numAsteriscos(arreglo) {
    let numAsteriscos = 0;
    for (const elemento of arreglo) {
      if (typeof elemento === "string" && elemento === "*") {
        numAsteriscos++;
      }
    }
    return numAsteriscos;
  }
  console.log(numAsteriscos(["Hola", "mundo", "*"])); // 1
  console.log(numAsteriscos(["*", "adiós", "*", "amor", "*"])); // 3
  console.log(numAsteriscos(["1", 2, 3, 4, 5])); // 0
    