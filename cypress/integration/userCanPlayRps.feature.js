describe("user can play RPS", () => {
  it("user can see the options to choose", () => {
    cy.visit("/")
    cy.get("h1#title").should("contain","Let's play Rock Paper Scissors")
    cy.get("p#message").should("contain", "Make your choice")
    cy.get("i#rock").should('be.visible').click()
    cy.get("i#paper").should('be.visible').click()
    cy.get("i#scissors").should('be.visible').click()
  })
})