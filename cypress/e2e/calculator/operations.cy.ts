/// <reference types="cypress" />

describe('Operações', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5173/')
    })
  
    it('+ =', () => {
      cy.get("button").contains("1").click()
      cy.get("button").contains("+").click()
      cy.get("button").contains("1").click()
      cy.get("button").contains("=").click()
      cy.get('.display-container').contains("2")
    })
  
    it('x = x =', () => {
      cy.get("button").contains("4").click()
      cy.get("button").contains("x").click()
      cy.get("button").contains("4").click()
      cy.get("button").contains("=").click()
      cy.get("button").contains("x").click()
      cy.get("button").contains("4").click()
      cy.get("button").contains("=").click()
      cy.get('.display-container').should("have.text", "64")
    })
  
    it('AC', () => {
      cy.get("button").contains("1").click()
      cy.get("button").contains("AC").click()
      cy.get('.display-container').should("have.text", "0")
    })
  })