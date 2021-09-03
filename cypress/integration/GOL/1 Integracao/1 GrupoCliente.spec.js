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
 
  it('Cadastro de Grupo de Cliente', () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click()
    cy.get(loc.integracao.grupoCliente).click()
    cy.get(loc.menu.caminho).should('contain', 'Grupo de Cliente')
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({timeout: 10000})
    cy.wait(500)
    //verifica acentuação 
    cy.get('.panel').should('contain', 'Descrição').and('contain', 'Últ. Atualização')
   
    //adicionar 
    cy.get(loc.integracao.adicionar).click()
    cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
    cy.get('#descricao').clear().type(faker.name.firstName())
    cy.get('.ui-select-match > .form-control').type('especial')
    cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner').click()
    cy.get('#btn-salvar > span.ng-scope').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
    //seleciona e edita
    cy.contains('10% ESPECIAL').click()
    cy.get('#btn-editar > span.ng-scope').click({timeout: 10000})
    //editando...
    cy.get('#descricao').clear().type('Teste 2 editado')
    cy.get('.ui-select-match > .form-control').type('especial')
    cy.get('#ui-select-choices-row-2-0 > .ui-select-choices-row-inner').click()
    cy.get('.md-raised > span.ng-scope').click()
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
    // excluindo
    cy.contains('10% ESPECIAL').click()
    cy.get('#btn-excluir > span.ng-scope').click()
    cy.get('.swal2-confirm').click()
    cy.get(loc.menu.aviso).should('contain', 'Excluído')
    cy.get(loc.menu.fechaaviso).click({timeout: 10000})
    //adicionar outro====================================
     cy.get('#btn-adicionar > span.ng-scope').click()
     cy.get('.breadcrumb > :nth-child(4) > .ng-binding').should('contain', 'Cadastrar')
     cy.get('#descricao').clear().type(faker.name.firstName())
     cy.get('.ui-select-match > .form-control').type('especial')
     cy.get('#ui-select-choices-row-3-0 > .ui-select-choices-row-inner').click()
     cy.get('#btn-salvar > span.ng-scope').click()
     cy.get(loc.menu.aviso).should('contain', 'sucesso')
     cy.get(loc.menu.fechaaviso).click({timeout: 10000})
     //abrir  e edita
     cy.get(':nth-child(1) > [aria-label="Column Tabela de venda, Value 10% ESPECIAL"]').dblclick()
     cy.wait(1000)
     cy.get('[ng-click="ctrl.editarCadastro()"]').click()
     cy.get('#descricao').clear().type('Teste 4 editado')
     cy.get('.ui-select-match > .form-control').type('especial')
     cy.get('#ui-select-choices-row-4-0 > .ui-select-choices-row-inner').click()
     cy.get('.md-raised > span.ng-scope').click()
     cy.get(loc.menu.aviso).should('contain', 'sucesso')
     cy.get(loc.menu.fechaaviso).click({timeout: 10000})
     cy.get(':nth-child(1) > [aria-label="Column Tabela de venda, Value 10% ESPECIAL"]').dblclick()
     cy.wait(1000)
     cy.get('.pull-right > .md-button > span.ng-scope').click()

     //abrir e excluir novamente
     cy.get(':nth-child(1) > [aria-label="Column Tabela de venda, Value 10% ESPECIAL"]').dblclick()
     cy.wait(1000)
     cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click()
     cy.get('.swal2-confirm').click()
     cy.get(loc.menu.aviso).should('contain', 'Excluído')
     cy.get(loc.menu.fechaaviso).click({timeout: 10000})
  })
  
})