describe('Test Group 2 - Test 3', () => {
  it('should visit a different page and verify the title', () => {
    cy.visit('https://jsonplaceholder.typicode.com/users');
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('status').should('eq', 200);
  });

  it('should check the content of the page', () => {
    cy.visit('https://jsonplaceholder.typicode.com/users');
    cy.get('body').should('contain.text', 'Leanne Graham');
  });
});
