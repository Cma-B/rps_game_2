describe("user can play RPS", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("display the game result if user choose Rock", () => {
    cy.get("i#rock").click()
    cy.get("h3#p-choice").should("contain", "You'r choice: rock")
    cy.get("#computer").then(($computer) => {
      if ($computer.text().includes("Computer choice: scissors")) {
        cy.get("h2#result").should("contain", "You won!")

      } else if ($computer.text().includes("Computer choice: paper")) {
        cy.get("h2#result").should("contain", "You lost")

      } else {
        cy.get("#computer").should("contain", "Computer choice: rock")
        cy.get("#result").should("contain", "It's a draw")
      }
    })
  })

  it("display the game result if user choose Paper", () => {
    cy.get("i#paper").click()
    cy.get("h3#p-choice").should("contain", "You'r choice: paper")
    cy.get("#computer").then(($computer) => {
      if ($computer.text().includes("Computer choice: rock")) {
        cy.get("h2#result").should("contain", "You won!")

      } else if ($computer.text().includes("Computer choice: scissors")) {
        cy.get("h2#result").should("contain", "You lost")

      } else {
        cy.get("#computer").should("contain", "Computer choice: paper")
        cy.get("#result").should("contain", "It's a draw")
      }
    })
  })

  it("display the game result if user choose Scissors", () => {
    cy.get("i#scissors").click()
    cy.get("h3#p-choice").should("contain", "You'r choice: scissors")
    cy.get("#computer").then(($computer) => {
      if ($computer.text().includes("Computer choice: paper")) {
        cy.get("h2#result").should("contain", "You won!")

      } else if ($computer.text().includes("Computer choice: rock")) {
        cy.get("h2#result").should("contain", "You lost")

      } else {
        cy.get("#computer").should("contain", "Computer choice: scissors")
        cy.get("#result").should("contain", "It's a draw")
      }
    })
  })
})
