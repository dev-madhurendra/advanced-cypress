describe("Using Spy on a Method", () => {
  class Calculator {
    constructor() {
      this.total = 0;
    }

    add(number) {
      this.total += number;
      return this.total;
    }

    subtract(number) {
      this.total -= number;
      return this.total;
    }
  }

  const calculator = new Calculator();

  it("should spy on add and subtract methods", () => {
    cy.spy(calculator, "add")

    calculator.add(5)

    expect(calculator.add).to.have.been.called

    expect(calculator.add).to.have.been.calledWith(5)

    cy.spy(calculator, "subtract")

    calculator.subtract(2)

    expect(calculator.subtract).to.have.been.called

    expect(calculator.subtract).to.have.been.calledWith(2)

    expect(calculator.total).to.equal(3)
  })
})
