function calcularCadena(cadena) {
  if (cadena === "") {
    return 0;
  }
  let listaNumeros = cadena.split(" ");
  let resultadoSuma = 0;
  for (const numero of listaNumeros) {
    resultadoSuma += parseInt(numero);
  }
  return resultadoSuma;
}


export default calcularCadena;
