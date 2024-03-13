function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
      return ingresos * 0.4;
    } else {
      return 0;
    }
  }
  
  // Ejemplo de uso
  const impuesto1 = calcularImpuestos(25, 1500); // Retorna 600
  const impuesto2 = calcularImpuestos(17, 800); // Retorna 0
  
  console.log(`Impuesto 1: ${impuesto1}`);
  console.log(`Impuesto 2: ${impuesto2}`);
  