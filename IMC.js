function bmi(peso, altura) {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
      return "Bajo de peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obeso";
    }
  }
  
  // Ejemplo de uso
  const resultado1 = bmi(60, 1.7); // Retorna "Normal"
  const resultado2 = bmi(80, 1.55); // Retorna "Obeso"
  const resultado3 = bmi(100, 1.9); // Retorna "Sobrepeso"
  
  console.log(`Resultado 1: ${resultado1}`);
  console.log(`Resultado 2: ${resultado2}`);
  console.log(`Resultado 3: ${resultado3}`);
  