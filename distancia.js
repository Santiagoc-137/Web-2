function distancia(str1, str2) {
    let distancia = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        distancia++;
      }
    }
    return distancia;
  }
  
  // código de prueba
  console.log(distancia("hola", "hola")) // 0
  console.log(distancia("sol", "tol")) // 1
  console.log(distancia("carro", "correr")) // 2, ya que no pude que sean de distinto tamano este deberia dar: 3 
  