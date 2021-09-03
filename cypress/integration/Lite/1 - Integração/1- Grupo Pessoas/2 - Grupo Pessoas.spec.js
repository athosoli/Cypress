/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    
// cy.visit('htt
 it.only('Verificar Descriçao no menu', () => {
 
    cy.visit('http:///')
    cy.get('.MuiPaper-root').should('contain', 'Esqueci')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('234')
    cy.get('.MuiButton-label').dblclick()
    cy.wait(2000)
    cy.get('h1').should('contain', 'Dashboard')
    cy.get('.jss16').should('contain', 'Início') 
  
    //add grupo 3 veses
    for(let i = 0; i <= 3; i++){
    cy.get(':nth-child(2) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Dashboard')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Integração')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Pessoas')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Grupo de Pessoas')
    cy.get('.MuiCollapse-wrapperInner > :nth-child(2)').click()
   
    cy.get('.MuiButton-label').click()
    cy.get('#nome').type('Produtor')
    cy.get('#finalidade').click()
    cy.contains('Empresarial').click()
    cy.get('#tabela-preco').click()
    cy.contains('avistinha').click()
    cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.contains('Salvar').click()
    cy.wait(1000)
    //ler editar
    cy.get('.MuiCardContent-root').should('contain', 'Produtor')
    cy.get('.MuiCardContent-root').click(790, 275)
   
    cy.get('#nome').clear().type('exProdutor')
    cy.get('#finalidade').click()
    cy.contains('Empresarial').click()
    cy.get('#tabela-preco').click()
    cy.contains('avistinha').click()
    cy.contains('Salvar').click()
   
    cy.get('[d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"]').click()
    cy.get('.MuiCardContent-root').should('contain', 'exProdutor')
    cy.get('.MuiCardContent-root').click(820, 275)
    cy.get('.swal2-popup').should('contain', 'Excluir')
    cy.contains('EXCLUIR').click()
   
    }
 

  
})
})