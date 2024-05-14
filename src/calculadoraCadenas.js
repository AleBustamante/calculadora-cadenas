function asegurarDelimitador(caracter) {
    return caracter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function calcularCadena(cadena, delimitador) {
  if (cadena === "") {
    return 0;
  }
  let listaNumeros = "";
  if (delimitador == "") {
    listaNumeros = cadena.split(/[,\ ,-]/);
  }
  else {
    const delimitadorSeguro = asegurarDelimitador(delimitador)
    const regex = new RegExp(`[ ,\\-]|${delimitadorSeguro}`, 'g');
    listaNumeros = cadena.split(regex);
  }
  let resultadoSuma = 0;
  for (const numero of listaNumeros) {
    resultadoSuma += parseInt(numero);
  }
  return resultadoSuma;
}


export default calcularCadena;
