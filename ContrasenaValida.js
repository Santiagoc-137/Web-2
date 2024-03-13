function contrasenaValida(contrasena) {
    if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso
  const contrasena1 = "2Fj(jjbFsuj";
  const contrasena2 = "123456789";
  
  console.log("Contraseña 1:", contrasenaValida(contrasena1)); // true
  console.log("Contraseña 2:", contrasenaValida(contrasena2)); // false
  