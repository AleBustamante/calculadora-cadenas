import calcularCadena from "./calculadoraCadenas.js";

describe("Calcular suma de numeros en cadena", () => {
  it("Cuando se pasa una cadena vacia deberia dar como resultado 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
});
