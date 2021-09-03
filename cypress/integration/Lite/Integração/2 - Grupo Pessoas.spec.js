/// <reference types="Cypress" />
const faker = require('faker')


context('Testar o Login Lite', () => {
// beforeEach(() => {
    
// cy.visit('http:

 it.only('Cadastrar grupo de pessoas', () => {
    //logim
    cy.visit('http/')
    cy.get('.MuiPaper-root').should('contain', 'Esqueci')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('teste')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('.MuiButton-label').dblclick()
    cy.wait(2000)
    cy.get('h1').should('contain', 'Dashboard')
    cy.get('.jss16').should('contain', 'Início') 
    //Veficia Descriçoes no Menu
    cy.get(':nth-child(2) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Dashboard')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Integração')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Pessoas')
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('contain', 'Grupo de Pessoas')
    //acessa Grupo de Pessoas
    cy.get('.MuiCollapse-wrapperInner > :nth-child(2)').click()
    cy.get('.MuiCardHeader-root').click()
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('contain', 'Grupo de pessoas') 
    cy.get('.jss16').should('contain', 'Listagem de grupo de pessoas') 
    cy.get('.MuiButton-label').click()
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('contain', 'Cadastrar grupo de pessoas')
    //Informe o nome
    cy.get('.MuiFormControlLabel-root > .MuiTypography-root').click()
    cy.get('#nome').type('CyTeste1')
    //cy.get('#finalidade').click()
    cy.contains('Salvar').click({timeout: 10000})
    //cy.get('.swal2-popup').should('contain', 'Seus dados foram atualizados com sucesso!')
    cy.get('.swal2-popup').should('contain', 'Seu cadastro foi feito com sucesso!')
    cy.wait(5000)
    //editar
    cy.contains('CyTeste1').should('contain', 'CyTeste1') 
    cy.get('.Mui-odd > .MuiDataGrid-cell--withRenderer > div > [style="cursor: pointer; font-size: 18px;"]').click()
   

 

  
})
})