function password(texto) {
    const minusculas = texto.toLowerCase();
    const sinEspacios = minusculas.replace(/\s/g, "");
    const reemplazos = {
      a: "4",
      e: "3",
      i: "1",
      o: "0",
    };
    let password = "";
    for (const letra of sinEspacios) {
      password += reemplazos[letra] || letra;
    }
    return password;
  }

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""