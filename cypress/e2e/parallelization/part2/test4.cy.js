describe('Test Group 2 - Test 4', () => {
  it('should verify JSONPlaceholder user data', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.body).to.have.length.of.at.least(1);
      expect(response.body[0]).to.have.property('name');
    });
  });

  it('should interact with a mock API endpoint', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      statusCode: 200,
      body: [{ id: 1, name: 'Mocked User' }]
    }).as('getUsersMock');

    cy.visit('https://jsonplaceholder.typicode.com/users');
    cy.wait('@getUsersMock');
    cy.get('body').should('contain.text', 'Mocked User');
  });
});
