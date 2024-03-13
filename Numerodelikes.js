function likes(numero) {
    if (numero < 1000) {
      return numero.toString();
    } else if (numero >= 1000 && numero < 1000000) {
      return (numero / 1000).toFixed(1) + "K";
    } else {
      return (numero / 1000000).toFixed(1) + "M";
    }
  }
  
  // Ejemplo de uso
  const numero1 = 1400;
  const numero2 = 34567;
  const numero3 = 7456345;
  
  console.log(`Likes para ${numero1}: ${likes(numero1)}`);
  console.log(`Likes para ${numero2}: ${likes(numero2)}`);
  console.log(`Likes para ${numero3}: ${likes(numero3)}`);
  
  // Salida
  // Likes para 1400: 1K
  // Likes para 34567: 34K
  // Likes para 7456345: 7M
  