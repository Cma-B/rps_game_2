describe(' user can play RPS game', () => {
  before(() => {
    cy.visit('/');
  })
  it('user can start to play RPS game', () => {
   cy.get('input#name').type('Sima')
   cy.get('button#play').contains("Start Gaming").click();
   cy.get('p#welcome-message').should('contain', ' Welcome Sima, Start RPS game by clicking on one of the icons')
  })
})
