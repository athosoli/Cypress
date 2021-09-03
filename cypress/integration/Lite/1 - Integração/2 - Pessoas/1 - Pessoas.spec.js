/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    
// cy.visit('h
 it.only('Verificar Descriçao no menu', () => {
 
    cy.visit('http://')
    cy.get('.MuiPaper-root').should('contain', 'Esqueci')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Lite123')
    cy.get('.MuiButton-label').dblclick()
    cy.wait(1000)
    cy.get('h1').should('contain', 'Dashboard')
    cy.get('.jss16').should('contain', 'Início') 
   //menu check
    cy.get(':nth-child(2) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Dashboard')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Integração')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Pessoas')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Grupo de Pessoas')
    cy.contains('Integração').click()
    cy.contains('Pessoas').click()
   // cy.get('.MuiCollapse-wrapperInner > :nth-child(1)').click()
    //cy.get('.MuiCardHeader-root').click()
  //  cy.get('.MuiDataGrid-cell--withRenderer').click()
//  cy.contains('EXCLUIR').click()

  cy.get('.MuiButton-label').click()
  cy.get('#nome').type(faker.name.firstName(2))
  
  cy.get('#cpf').type('83715738987')
  cy.get('#dataNascimento').type('22021983')
  cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click()
  cy.contains('Funcionários').click()
  cy.contains('Salvar').click()
  cy.get('.jss16 > .MuiButtonBase-root').click()




  

 

  
})
})