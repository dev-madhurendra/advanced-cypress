describe('Test Group 1 - Test 2', () => {
  it('should verify the presence of the paragraph', () => {
    cy.visit('https://example.com');
    cy.get('p').should('exist');
  });

  it('should verify the link in the page', () => {
    cy.visit('https://example.com');
    cy.get('a').should('have.attr', 'href', 'https://www.iana.org/domains/example');
  });
});
