/// <reference types="cypress" />

describe('Section 1 Type',()=>{
    it("Test validar titulo",()=>{
    cy.on("uncaught:exception",()=> false)

    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')
    cy.get("#APjFqb").type("cypress io{enter}")
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.wait(4000)
    })
})