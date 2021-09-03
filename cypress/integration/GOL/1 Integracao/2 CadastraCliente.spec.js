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
 
  it('Cadastro de cliente', () => {
    //seleciona cliente no menu
    cy.get(loc.integracao.icone).click()
    cy.get(loc.integracao.cliente).click()
    cy.get(':nth-child(3) > .ng-binding').should('contain', 'Cliente')
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({timeout: 10000})
    cy.wait(500)
    //verifica acentuação 
     cy.get('.panel').should('contain', 'Código').and('contain', 'Últ. Atualização')
    //adicionar
    cy.get(loc.menu.adicionar).click({timeout: 10000})
    //verificar clica em juridia e verifica razao
    cy.get('#radio_7 > .md-container > .md-off').click()
    cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Razão social")
   //verificar clica em fisica e verifica nome
    cy.get('#radio_6 > .md-container > .md-off').click()
    cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Nome")
    //razao social
    cy.get('#razaoSocial').type(faker.company.companyName(2))
    cy.get('#fantasia').type(faker.name.firstName(2))
    cy.get('#site').type('www.AthosTeste.com.br')
    cy.get('#email').type('Athos@adsoft.com')
    //telefone
    cy.get(':nth-child(3) > :nth-child(2) > .form-group > .input-group > #telefone').type(faker.phone.phoneNumber())
    cy.get('#celular').type(faker.phone.phoneNumber())
    
    cy.get('#intClienteGrupo > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click()
    cy.get('#ui-select-choices-row-13-0 > .ui-select-choices-row-inner > .text-truncate').click()
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click()
    cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner > .text-truncate').click()
    cy.get(':nth-child(4) > :nth-child(3) > .form-group > .ui-select-container > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click()
    cy.get('#ui-select-choices-row-18-2 > .ui-select-choices-row-inner > .text-truncate').click()
    cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click()
    //mensgaem p/ venda,  observção,  spc 
    cy.get('#mensagemVenda').click()
    cy.get('#mensagemVenda').type(faker.random.words(2))
    cy.get('#mensagemVenda').clear().type(faker.random.words(2))

    cy.get('#observacao').click()
    cy.get('#observacao').type(faker.random.words(2))
    cy.get('#observacao').clear().type(faker.random.words(2))
    
    cy.get('#spcObservacao').click()
    cy.get('#spcObservacao').type(faker.random.words(2))
    cy.get('#spcObservacao').clear().type(faker.random.words(2))
    //grupo empresarial
    cy.get('#intGrupoEmpresarial > .ui-select-match > .form-control > [ng-click="$select.toggle($event)"] > .fa').click({timeout: 10000})
    cy.get('#ui-select-choices-row-14-0 > .ui-select-choices-row-inner').click()
    //cpf e dt nascimento
    cy.get('#pfNascimento').type('20071987')
    cy.get('#pfCpf').type('57451314898')
    cy.get('#radio_7 > .md-container > .md-off').click({timeout: 10000})
    cy.get('#pfPai').type(faker.name.firstName(2))
    cy.get('#pfMae').type(faker.name.firstName(2))
    cy.get('#pfIdentidade').type(faker.random.number())
    //endereço
    cy.get('[label="Endereço"] > .panel-heading').click({timeout: 10000})
    cy.get('#enderecoComplemento').click({timeout: 10000})
    cy.get('#enderecoComplemento').type(faker.random.words(2))
    cy.get('#enderecoComplemento').clear().type(faker.random.words(2))
    cy.get('#enderecoCep').type('45990292')
    cy.get('#enderecoLogradouroNumero').type('108')
    //salvar
    cy.get('#btn-salvar').click({timeout: 10000})
    cy.get('.toast').should("contain", "sucesso")

    //verifica ficha financeira
    cy.get(':nth-child(1) > [aria-label="Column Natureza social, Value F"] > span').dblclick({timeout: 10000})
    cy.get('[ng-click="ctrl.exibirFichaFinanceiro()"] > span.ng-scope').click({timeout: 10000})
    cy.get('.md-toolbar-tools > h2').should("contain", "Contas a Receber")
    cy.get('.md-toolbar-tools > .md-icon-button > .ng-scope').click()
    //voltar
    cy.get('.col-md-24 > .pull-right > .md-button').click({timeout: 10000})
  
    //editar
    cy.get(':nth-child(1) > [aria-label="Column Natureza social, Value F"]').click()
    cy.get('#btn-editar > span.ng-scope').click({timeout: 10000})

    //pessoa juridica
    cy.get('#radio_21 > .md-container > .md-off').click()
    cy.get(':nth-child(1) > .col-md-16 > .form-group > .control-label > .ng-binding').should("contain", "Razão social")
    cy.get('#pjCnpj').type('47960950000121')
    cy.get('#pjInscricaoEstadual').type('12345678')
    //salvar aedição e verifica
    cy.get('#btn-salvar').click()
    cy.get('.toast').should("contain", "atualizado")
    //excluir e verifica
    cy.get(':nth-child(1) > [aria-label="Column Natureza social, Value J"] > span').click()
    cy.get('[ng-click="ctrl.excluirCadastro()"] > span.ng-scope').click({timeout: 10000})
    cy.get('.swal2-confirm').click()
    cy.get('.toast').should("contain", "Excluído")
    //botao atualiza
    cy.get('.layout-row > :nth-child(1) > .md-raised > .fa').click()







  })
  
})