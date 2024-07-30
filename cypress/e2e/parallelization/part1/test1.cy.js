describe('Test Group 1 - Test 1', () => {
  it('should visit the example page and verify the title', () => {
    cy.visit('https://dev-madhurendra.vercel.app/');
    cy.title().should('include', "👋 | Madhurendra's Tech Odyssey");
  });
});
