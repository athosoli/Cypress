/// <reference types="Cypress" />
const faker = require('faker')
import loc from '../../support/locators'

context('Testar o Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
    cy.get(loc.login.password).type('1234')//variavel e locators
    cy.contains('ACESSAR').click({timeout: 20000})
        if(cy.get('.toast').should('contain', 'Usuário e/ou senha inválido.') ){
        cy.get('.md-icon-button > .ng-scope').click()
        cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    }
    cy.contains('ACESSAR').click({timeout: 20000})
    cy.contains('Selecionar...').click({timeout: 10000})
    cy.contains('DEMONSTRAÇÃO').click({timeout: 10000})
    cy.contains('SELECIONAR FILIAL').click({timeout: 10000})
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    cy.get(loc.menu.navigator).click()//locators 
    cy.wait(500)
    cy.get(loc.menu.fixar).click()//locators
 })
 
  it('Cadastro de Titulo', () => {
    //seleciona cliente no menu
    cy.get(loc.financeiro.icone).click()
    cy.get(loc.financeiro.contasreceber).click()
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({timeout: 10000})
    cy.get(loc.menu.caminho).should('contain', 'Contas a receber')
    //verifica acentuação 
    cy.get('.panel').should('contain', 'Descrição').and('contain', 'Últ. Atualização')
     //mais açoes
     cy.get('.col-md-24 > :nth-child(2) > .md-raised > .caret').click()
     cy.get('.md-menu-small > :nth-child(5) > .md-button > .ng-scope').click({timeout: 10000})
     //gerar boleto.
     cy.get('#finConta > .ui-select-match > .form-control').type('sicoob')
     cy.get('.ui-select-choices-row-inner > .text-truncate').click()
     //data lancamento
     cy.get('[ui-titulo="Lançamento"] > .input-daterange > .start').click()
     cy.get('.datepicker-days > .table-condensed > tfoot > :nth-child(1) > .today').click()   
     //salva e clica fora
     cy.get('#md-filter-btn > span.ng-scope').click()
     cy.get('.md-sidenav-backdrop').click()
     //convenio select
     cy.get('#convenio > .ui-select-match > .form-control').click()
     cy.get('.ui-select-choices-row-inner').click()
     //boleto select primeiro boleto e gera
     cy.get('#selecionado_0 > .md-container').click({timeout: 10000})
     cy.get('.col-md-24 > .pull-right > .md-raised').click({timeout: 10000})
     //validacao
     cy.get('#swal2-content').should('contain', 'Título(s) atualizado(s) o portador(caixa) com sucesso!')
     cy.get('.swal2-confirm').click({timeout: 10000})
     //cy.get('.toast-message').to.not.equal('contain', 'sucesso')
     //cy.get('.md-toolbar-tools').to.not.equal('sucesso')
   
     //email
     cy.get('.text-center > :nth-child(3) > .ng-scope').click({timeout: 10000})
     cy.get('#email').type('athos@adsoft.com.br')
     cy.get('.col-md-24 > .md-raised > .ng-scope').click()
     //whatsapp
     cy.get('.text-center > :nth-child(2) > .ng-scope').click({timeout: 10000})
     cy.get('#numWhatsapp').type('73999035376')
     cy.get('.col-md-24 > .md-raised > .ng-scope').click()
     //impressao
     cy.get(':nth-child(1) > .md-whiteframe-2dp').click({timeout: 10000})
 
 
 
   })
   
 })