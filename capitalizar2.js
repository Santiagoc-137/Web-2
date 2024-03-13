function capitalizar(texto) {
    return texto.replace(/\b[a-z]/g, (letra) => letra.toUpperCase());
  }
 console.log(capitalizar("hola mundo")) // "Hola Mundo"
 console.log(capitalizar("make it real")) // "Make It Real"
 console.log(capitalizar("")) // ""
    