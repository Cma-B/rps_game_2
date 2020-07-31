describe(' user can play RPS game', () => {
  before(() => {
    cy.visit('/');
  })
  it('user can start to play RPS game', () => {
    cy.get('button#rock').contains("Rock").click();
    cy.get('button#paper').contains("Paper").click();
    cy.get('button#scissors').contains("Scissors").click();

  })
})
