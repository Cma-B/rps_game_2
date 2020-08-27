describe("user can see RPS game page", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("user can see the title, button and options to choose ", () => {
    cy.get("h1#title").should("contain", "Let's play Rock Paper Scissors")
    cy.get("button#restart").click()
    cy.get("#p-score").should("be.visible")
    cy.get("#c-score").should("be.visible")
    cy.get("p#message").should("contain", "Make your choice")
    cy.get("i#rock").should("be.visible")
    cy.get("i#paper").should("be.visible")
    cy.get("i#scissors").should("be.visible")
  })
})