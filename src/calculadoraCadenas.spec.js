import calcularCadena from "./calculadoraCadenas.js";

describe("Calcular suma de numeros en cadena", () => {
  it("Cuando se pasa una cadena vacia deberia dar como resultado 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Cuando se pasa una cadena con un solo elemento retorna ese mismo elemento", () => {
    expect(calcularCadena("5")).toEqual(5);
  });
  it("Cuando se pasa una cadena con dos elementos separados por un espacio devuelve su suma", () => {
    expect(calcularCadena("5 4")).toEqual(9);
  });
  it("Cuando se pasa una cadena con varios elementos separados por un espacio devuelve su suma", () => {
    expect(calcularCadena("5 4 23 1 7")).toEqual(40);
  });
  it("Cuando se pasa una cadena con varios elementos separados por espacios o comas devuelve su suma", () => {
    expect(calcularCadena("5,4 23,1,7")).toEqual(40);
  });
});
