function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
      suma += i;
    }
    return suma;
  }
  
  // Ejemplo de uso
  const numeroInicial1 = 1;
  const numeroFinal1 = 5;
  const numeroInicial2 = 10;
  const numeroFinal2 = 20;
  
  console.log(`Suma de los números entre ${numeroInicial1} y ${numeroFinal1}: ${sumarRango(numeroInicial1, numeroFinal1)}`);
  console.log(`Suma de los números entre ${numeroInicial2} y ${numeroFinal2}: ${sumarRango(numeroInicial2, numeroFinal2)}`);
  
  // Salida
  // Suma de los números entre 1 y 5: 15
  // Suma de los números entre 10 y 20: 165
  