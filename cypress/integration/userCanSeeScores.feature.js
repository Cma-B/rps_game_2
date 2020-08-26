describe("user can see the score", () => {
  before(() => {
    cy.visit("/", {
      onBeforeLoad: (game) => {
        cy.stub(game.Math, 'random').returns(1);
      }
    })
  })

  it("expect to show the result on scoreboard", () => {
    cy.get("i#rock").click()
    cy.get("#result").should("contain", "You won!")
    cy.get("i#rock").click()
    cy.get("#result").should("contain", "You won!")
    cy.get("i#paper").click()
    cy.get("#result").should("contain", "You lost")
    cy.contains("You: 2").should("be.visible")
    cy.contains("Computer: 1").should("be.visible")
  })
})