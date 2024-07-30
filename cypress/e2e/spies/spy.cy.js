describe("Using Spy", () => {
  const obj = {
    color: "red",
    getColor() {
      return this.color
    },
    setColor(color) {
      this.color = color
    },
  }

  it("should spy the function", () => {
    cy.spy(obj, "getColor")

    obj.getColor()

    expect(obj.getColor).to.have.been.called

    cy.spy(obj, "setColor")

    obj.setColor("blue")

    expect(obj.setColor).to.have.been.calledWith("blue")

    obj.getColor()

    expect(obj.getColor).to.have.returned("red")
  })
})