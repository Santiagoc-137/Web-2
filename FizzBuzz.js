function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "fizzbuzz";
    } else if (numero % 3 === 0) {
      return "fizz";
    } else if (numero % 5 === 0) {
      return "buzz";
    } else {
      return numero;
    }
  }
  
  // Ejemplo de uso
  const numero1 = 15;
  const numero2 = 7;
  const numero3 = 10;
  
  console.log(`Para ${numero1}: ${fizzBuzz(numero1)}`);
  console.log(`Para ${numero2}: ${fizzBuzz(numero2)}`);
  console.log(`Para ${numero3}: ${fizzBuzz(numero3)}`);
  
  // Salida
  // Para 15: fizzbuzz
  // Para 7: 7
  // Para 10: buzz
  