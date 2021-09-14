/// <reference types="Cypress" />
const faker = require('faker')
import loc from '../../../support/locators'

context('Testar o Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(loc.login.user).type(`${Cypress.env('usuario')}`)//variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env('senha')}`)//variavel e locators  
    cy.get("[class=ng-scope]").should("contain", "ACESSAR")
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
 
  it('Cadastro de cliente', () => {
    //seleciona cliente no menu
    cy.get(loc.faturamento.icone).click()
    cy.get(loc.faturamento.documentoSaida).click()
    cy.get(loc.menu.caminho).should('contain', 'Documento de saida')
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({timeout: 10000})
    cy.wait(1000)
    //verifica acentuação
    cy.get(loc.menu.painel).should("contain", "Vendedor");
    cy.get(loc.menu.painel).should("contain", "Operação");
    cy.get(loc.menu.painel).should("contain", "Série");
    //adicionar
    cy.get(loc.faturamento.adicionar).click({timeout: 10000})
   
    cy.get('#fisOperacao > .ui-select-match > .form-control').click()
    cy.get('#ui-select-choices-row-20-9 > .ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(1000)
    cy.get('.col-md-24 > .row > .col-md-14 > .layout-row > .flex > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type('alex alves pereira dos santos')
    cy.get('.md-list-item-text > .layout-column').click()
    cy.wait(1000)
    
    cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').type('vista')
    cy.get('#ui-select-choices-row-22-0 > .ui-select-choices-row-inner').click()
    cy.wait(1000)
    cy.get('#finMeiopagamentoParcelas > .ui-select-match > .form-control').type('dinheiro')
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    cy.wait(1000)
   
    cy.get(':nth-child(2) > .col-md-14 > .layout-row > .layout-column > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type('engradado')
    cy.get('#ui-select-choices-row-25-0 > .select2-result-label').click()
    cy.wait(1000)
    cy.get('#itemValorUnitario').type('10000')
    cy.get('[ng-click="ctrl.vendeItem()"] > span.ng-scope').click()
    cy.wait(1000)
    cy.contains('Avançar').click({timeout: 10000})
    cy.get('[ng-click="ctrl.salvarCadastro()"]').click()
    //cy.get('.md-toolbar-tools > h2').should('parcelas')
    cy.get('.layout-row > .md-raised > span.ng-scope').click()
    cy.wait(1000)
    cy.get('.md-menu > .md-raised > :nth-child(1)').click()
    cy.wait(1000)
    cy.get('._md > md-menu-item.ng-scope > .md-button').click({timeout: 10000})











  })
  
})