function numeroDeAes(cadena) {
    cadena = cadena.toLowerCase();
  
    const expresionRegular = /a/g;
  
    const coincidencias = cadena.match(expresionRegular);
  
    if (!coincidencias) {
      return 0;
    }
  
    return coincidencias.length;
  }

 console.log(numeroDeAes("Hola")); // 1
 console.log(numeroDeAes("casa")); // 2
 console.log(numeroDeAes("Ana")); // 2
 console.log(numeroDeAes("Árbol")); // 1
 console.log(numeroDeAes("Murciélago")); // 0
