/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    
// cy.visit('http:/
 it.only('Verificar Descriçao no menu', () => {
 
    cy.visit('http:r/')
    cy.get('.MuiPaper-root').should('contain', 'Esqueci')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('.MuiButton-label').dblclick()
    cy.wait(2000)
    cy.get('h1').should('contain', 'Dashboard')
    cy.get('.jss16').should('contain', 'Início') 
   
    cy.get(':nth-child(2) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Dashboard')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Integração')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Pessoas')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Grupo de Pessoas')
    cy.get('.MuiCollapse-wrapperInner > :nth-child(1)').click()
    cy.get('.MuiCardHeader-root').click()
    cy.get('.MuiContainer-root > .MuiPaper-root').should('contain', 'Nome*')
    cy.get('.MuiContainer-root > .MuiPaper-root').should('contain', 'Pessoas')

  

 

  
})
})