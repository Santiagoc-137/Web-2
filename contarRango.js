function contarRango(numeroInicial, numeroFinal) {
    let contador = 0;
    for (let i = numeroInicial + 1; i < numeroFinal; i++) {
      contador++;
    }
    return contador;
  }
  
  // Ejemplo de uso
  const numeroInicial1 = 1;
  const numeroFinal1 = 5;
  const numeroInicial2 = 10;
  const numeroFinal2 = 20;
  
  console.log(`Cantidad de números entre ${numeroInicial1} y ${numeroFinal1}: ${contarRango(numeroInicial1, numeroFinal1)}`);
  console.log(`Cantidad de números entre ${numeroInicial2} y ${numeroFinal2}: ${contarRango(numeroInicial2, numeroFinal2)}`);
  
  // Salida
  // Cantidad de números entre 1 y 5: 3
  // Cantidad de números entre 10 y 20: 9
  