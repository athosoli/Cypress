/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    

for(let i = 0; i <= 10; i++){
 it.only('Verificar Descriçao no menu', () => {
 
    cy.visit('http:///')
    cy.get('.MuiPaper-root').should('contain', 'Esqueci')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('123')
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

  
    cy.get(':nth-child(4) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Estoque')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Produtos')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Grupo de Produtos')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Marca')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Modelos de Grade')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Tabelas de Preço')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Regras de Desconto')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Alterações em Lote')

    cy.get(':nth-child(6) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Pagamento')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Meios de Pagamento')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Condição de Venda')

    cy.get(':nth-child(8) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Fiscal')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Grupos Tributário')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Operações Fiscais')
    cy.get('.MuiList-root > :nth-child(1)').click()
 

  
})
}
})