describe('Network Requests to JSONPlaceholder', () => {
  it('should intercept and stub the GET /educations request', () => {
    // Stub the GET /educations request
    cy.intercept('GET', 'https://madhurendra-portfolio-json-server.vercel.app/educations', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: "High School",
          school: "Kuri Lal Rungta Saraswati Vidya Mandir",
          location: "Khalilabad, S.K.N., UP, 272175",
          start_date: "2014",
          end_date: "2016",
          percentage: "87.5%",
          description: "Completed high school with a focus on mathematics and physics."
        },
        {
          id: 2,
          title: "Intermediate",
          school: "S N Singh Inter College",
          location: "Panchpedwa, S.K.N., UP, 272175",
          start_date: "2016",
          end_date: "2018",
          percentage: "88.8%",
          description: "Completed intermediate with a focus on mathematics, physics and chemistry."
        }
      ]
    }).as('getEducationsStub');

    // Visit the page that makes the network request
    cy.visit('https://dev-madhurendra.vercel.app/'); // Replace with the actual route in your application

    // Wait for the stubbed request and verify the response
    cy.wait('@getEducationsStub').its('response.body').should('have.length', 2);

    // Adjust selectors to match your page's structure
    cy.get('button[role="tab"]').should('have.length', 2);
    cy.get('button[role="tab"]').first().invoke('text').then((text) => {
      expect(text.trim().toLowerCase()).to.equal('high school');
    });
    cy.get('button[role="tab"]').last().invoke('text').then((text) => {
      expect(text.trim().toLowerCase()).to.equal('intermediate');
    });
  });
});
