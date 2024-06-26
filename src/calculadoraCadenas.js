function generarRegexSegura(caracter) {
    const delimitadorSeguro = caracter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`[ ,\\-]|${delimitadorSeguro}`, 'g');
}

function sumarElementosCadena(cadena, delimitador) {
  const MAX_NUMERO_ACEPTADO = 1000;
  if (cadena === "") {
    return 0;
  }
  let listaNumeros = "";

  if (delimitador == "") {
    listaNumeros = cadena.split(/[,\ ,-]/);
  }
  else {
    const regex = generarRegexSegura(delimitador)
    listaNumeros = cadena.split(regex);
  }

  let resultadoSuma = 0;
  for (const strNumero of listaNumeros) {
    const numero = parseInt(strNumero);
    if (numero <= MAX_NUMERO_ACEPTADO) {
      resultadoSuma += numero;
    }
  }
  return resultadoSuma;
}


export default sumarElementosCadena;
