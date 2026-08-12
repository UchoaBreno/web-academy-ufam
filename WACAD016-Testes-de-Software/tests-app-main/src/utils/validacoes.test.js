const {
  firstName,
  checkStockAvailability,
  calculateTotalPrice,
} = require("./validacoes");

describe("firstName", () => {
  it("deve retornar o primeiro nome de um nome com sobrenome", () => {
    expect(firstName("Maria Silva")).toBe("Maria");
  });

  it("deve retornar somente o primeiro nome quando existem vários sobrenomes", () => {
    expect(firstName("Maria da Silva Santos")).toBe("Maria");
  });

  it("deve retornar o próprio nome quando não há sobrenome", () => {
    expect(firstName("Maria")).toBe("Maria");
  });

  it("deve ignorar espaços no início e no fim", () => {
    expect(firstName("  Maria Silva  ")).toBe("Maria");
  });
});

describe("checkStockAvailability", () => {
  it("deve retornar true quando há estoque suficiente", () => {
    expect(checkStockAvailability("laptop", 5)).toBe(true);
  });

  it("deve retornar true quando a quantidade é exatamente o estoque disponível", () => {
    expect(checkStockAvailability("smartphone", 20)).toBe(true);
  });

  it("deve retornar false quando a quantidade ultrapassa o estoque", () => {
    expect(checkStockAvailability("headphone", 6)).toBe(false);
  });

  it("deve retornar false para produto sem estoque", () => {
    expect(checkStockAvailability("book", 1)).toBe(false);
  });

  it("deve retornar false para produto inexistente", () => {
    expect(checkStockAvailability("monitor", 1)).toBe(false);
  });

  it("deve retornar false para quantidade zero ou negativa", () => {
    expect(checkStockAvailability("laptop", 0)).toBe(false);
    expect(checkStockAvailability("laptop", -1)).toBe(false);
  });
});

describe("calculateTotalPrice", () => {
  it("deve calcular o total de um único produto", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
    ];

    expect(calculateTotalPrice(products)).toBe(20);
  });

  it("deve somar o valor de todos os produtos", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];

    expect(calculateTotalPrice(products)).toBe(70);
  });

  it("deve retornar zero para uma lista vazia", () => {
    expect(calculateTotalPrice([])).toBe(0);
  });

  it("deve considerar quantidade zero no cálculo", () => {
    const products = [
      { name: "Product 1", price: 100, quantity: 0 },
      { name: "Product 2", price: 20, quantity: 2 },
    ];

    expect(calculateTotalPrice(products)).toBe(40);
  });
});