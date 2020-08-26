describe("user can see RPS game page", () => {
  before(() => {
    cy.visit("/")
  })
  it("user can see the options to choose", () => {
    cy.get("h1#title").should("contain", "Let's play Rock Paper Scissors")
    cy.get("p#message").should("contain", "Make your choice")
    cy.get("i#rock").should('be.visible')
    cy.get("i#paper").should('be.visible')
    cy.get("i#scissors").should('be.visible')
  })
})