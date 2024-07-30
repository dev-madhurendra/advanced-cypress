/*
  1. You have a function that wraps window.location and don't want your application 
     to be navigated.
  2. You're trying to test your application's "failure path" by forcing things to fail.
  3. You're trying to test your application's "happy path" by forcing things to pass.
  4. You want to "trick" your application into thinking it's logged in or logged out.
  5. You're using oauth and want to stub login methods.
*/
describe("Stubbing Example", () => {
  const obj = {
    sum: (a, b) => a + b,
  }

  const car = {
    color: "red",
    getColor() {
      return this.color
    },
  }


  it("should stub the function", () => {
    cy.stub(obj, "sum").returns(3) // returns 3 instead of a + b

    expect(obj.sum(10, 20)).to.equal(3)
    expect(obj.sum(10, 25)).to.equal(3)
    expect(obj.sum(10, 20)).to.equal(30)
  })

  it("should stub and restore the function", () => {
    const stub = cy
      .stub(obj, "sum")
      .onFirstCall()
      .returns(3)
      .onSecondCall()
      .returns(10)
      .onThirdCall()
      .returns(20)

    expect(obj.sum(10, 20)).to.equal(3)
    expect(obj.sum(10, 20)).to.equal(10)
    expect(obj.sum(10, 20)).to.equal(20)

    // replace the spy with the original method
    stub.restore()

    expect(obj.sum(10, 20)).to.equal(30)
  })

  it("should stub a property", () => {
    expect(car.getColor()).to.equal("red")

    cy.stub(car, "color").value("blue")

    expect(car.getColor()).to.equal("blue")
  })
})