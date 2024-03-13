function transcribir(cadenaADN) {
    const transcripcion = {
      G: "C",
      C: "G",
      T: "A",
      A: "U",
    };
  
    let complementoARN = "";
    for (const letra of cadenaADN) {
      complementoARN += transcripcion[letra] || letra;
    }
    return complementoARN;
  }
  console.log(transcribir("ACGT")) // "UGCA"
  console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
  console.log(transcribir("XXXX")); // XXXX (letras no válidas se mantienen)
    