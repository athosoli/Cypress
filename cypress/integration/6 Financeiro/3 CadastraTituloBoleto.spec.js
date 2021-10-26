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
 
  it('Cadastro de Titulo', () => {
    //seleciona cliente no menu
    cy.get(loc.financeiro.icone).click()
    cy.get(loc.financeiro.contasreceber).click()
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({timeout: 10000})
    cy.get(loc.menu.caminho).should('contain', 'Contas a receber')
    //verifica acentuação 
    cy.get('.panel').should('contain', 'Descrição').and('contain', 'Últ. Atualização')
    //adicionar titulo
    cy.get(loc.financeiro.adicionar).click({timeout: 10000})
    cy.get(loc.financeiro.caminho).should('contain', 'Cadastrar')
    //nome
    cy.get('.select2-chosen.ng-binding').click({timeout: 10000})
    cy.get('.search-container > .ui-select-search').type('athos')
    cy.get('div[style="white-space: normal;"] > .ng-binding').click()
    //portador
    cy.get('#finConta > .ui-select-match > .form-control').type('SICOOB')
    cy.get('.ui-select-highlight').click()
    //forma de pagamento
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').type('sicoob')
    cy.get('.ui-select-choices-row-inner > .text-truncate').click()
    //data
    cy.get('#tituloVencimento').type('30092021')
    //valor
    cy.get('#tituloValorBruto').type(faker.random.number())
    cy.get('#tituloValorAcrescimo').type('18')
    cy.get('#tituloValorDesconto').type('123')
    //plano financeiro
    cy.get('.input-group > .ui-select-container > .ui-select-match > .form-control').type('vendas de mercadorias')
    cy.get('.ui-select-choices-row-inner > .ng-scope > .ng-binding').click()
    //centro de custo
    cy.get('[datasource="ctrl.modelo.rateios[0].rateios[0]"] > .form-group > .ui-select-container > .ui-select-match > .form-control').type('comercial')
    cy.get('#ui-select-choices-row-16-0 > .ui-select-choices-row-inner > .ng-scope > .ng-binding > .UI-SELECT-HIGHLIGHT').click()
    //historio
    cy.get('#tituloHistorico').type(faker.random.words(2))
    //desdobramento
    // cy.get('.pull-left > .md-raised > span.ng-scope').click({timeout: 10000})
    // cy.get('.md-toolbar-tools').should('contain', 'Desdobrar título')
    // cy.get('#qtd_parcelas').click().type('2')

    // cy.get('md-dialog-actions.layout-row > .md-raised > span.ng-scope').click()
    //salvar
    cy.get('[ng-click="ctrl.salvarCadastro()"] > span.ng-scope').click()
    cy.get('.toast-message').should('contain', 'sucesso')
    cy.get('.toast > .md-icon-button > .ng-scope').click()
    //botao atualiza
    cy.get(loc.menu.atualiza).click()
   // mais açoes
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
    cy.get('.md-sidenav-right > .layout-padding > .md-icon-button > .ng-scope').click()


  })
  
})