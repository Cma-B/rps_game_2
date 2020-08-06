describe(' user can see welcome message', () => {
  before(() => {
    cy.visit('/');
  })
  it('user can enter the name and see the message', () => {
    cy.get("h1#title").contains("Rock Paper Scissors")
    cy.get("p#text").contains("Enter Your Name")
    cy.get('input#user').type('Sima')
    cy.get('button#start').contains("Start").click()
    cy.get('p#welcome-message').should("contain", "Hello Sima, Let's play Rock Paper Scissors")
    cy.contains("Make Your Selection")
    cy.get('i#rock').should('be.visible').click()
    cy.get('i#paper').should('be.visible').click()
    cy.get('i#scissors').should('be.visible').click()

  })
})
