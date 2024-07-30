describe("Simulate Time Passage", () => {
  it("should simulate time passage and check behavior", () => {
    const now = new Date(2024, 6, 30).getTime();
    cy.clock(now);

    cy.visit('https://vclock.com/timer/');

    cy.get('#lbl-time').should('contain', '00:00');

    cy.tick(5000); // 5000 ms = 5 seconds

    cy.get('#lbl-time').should('contain', '00:05');
  });
});
