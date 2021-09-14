/// <reference types="Cypress" />
const faker = require("faker");
import loc from "../../support/locators";

context("Testar o Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ timeout: 20000 });
    cy.contains("Selecionar...").click({ timeout: 20000 });
    cy.contains("DEMONSTRAÇÃO (TESTE)").click({ timeout: 20000 });
    cy.get(".ui-select-match-text > .ng-binding").should("contain", "DEMONSTRAÇÃO (TESTE)");
    cy.contains("SELECIONAR FILIAL").click({ timeout: 20000 });
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    cy.wait(1000);
    cy.get(loc.menu.navigator).click({ timeout: 20000 }); //locators
    cy.wait(1000);
    cy.get(loc.menu.fixar).click({ timeout: 20000 }); //locators
  });
  
  it("CRIAR - ORÇAMENTO EXPORTA PARA PEDIDO EXPORTA PARA DOC VENDA  ", () => {
    //seleciona cliente no menu
    cy.get(loc.faturamento.icone).click({ timeout: 30000 });
    cy.get(loc.faturamento.orçamento).click({ timeout: 30000 });
    cy.get(loc.menu.caminho).should("contain", "Orçamento");
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({ timeout: 30000 });
    cy.wait(1000);
    //verifica acentuação
    cy.get(loc.menu.painel).should("contain", "Vendedor");
    cy.get(loc.menu.painel).should("contain", "Operação");
    cy.get(loc.menu.painel).should("contain", "Série");
    //adicionar
    cy.get(loc.faturamento.adicionar).click({ timeout: 30000 });
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    //verificar clica em juridia e verifica razao
    cy.get('#fisOperacao > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("5102").click({ timeout: 10000 })
    cy.get('#fatVendedor > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("ATHOS").click({ timeout: 10000 })
    cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("A VISTA").click({ timeout: 10000 })
    cy.get('#finMeiopagamento > .ui-select-match > .form-control').click({ timeout: 10000 })
    cy.contains("DINHEIRO").click({ timeout: 10000 })
    cy.get('.flex > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("athos teste")
    cy.wait(5000)
    cy.get(".ui-select-highlight").click({ timeout: 10000 })
    cy.get('div[ng-if="ctrl.modelo.clienteNome != null"] > :nth-child(1) > .panel > .panel-heading').click({ timeout: 10000 })
    cy.contains('Adicionar endereço').click({ timeout: 20000 })
    cy.get('#entregaCep').type("45990292")
    cy.get('#entregaLogradouroNumero').type("541")
    cy.wait(1000)
    cy.get('#entregaComplemento').type("Sobrado")
    cy.wait(1000)
    cy.get('.layout-row > .md-raised > span.ng-scope').click({ timeout: 10000 })
       // cy.get('.layout-column > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').click()
    cy.get('.layout-column > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type("skol em lata")
    cy.contains("SKOL EM LATA").click()

    cy.get('#itemQuantidade').clear().type("2")
   // cy.contains("DEPOSITO INTERNO").click()
  
    cy.get('.md-group > .flex').click({ timeout: 20000 })
    cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body').should("contain", "SKOL")
   
    cy.get('.col-md-24 > .pull-right > .md-raised > span.ng-scope').click({ timeout: 20000 })
    cy.get('[ng-click="ctrl.salvarCadastro()"]').click({ timeout: 30000 })
    cy.get(loc.menu.aviso).should('contain', 'sucesso')
    cy.get('.toast-title').click({ timeout: 30000 })
    cy.wait(5000)
   
    // hora de exportar para pedido
    cy.contains("ATHOS TESTE",{ matchCase: false }).dblclick({ timeout: 30000 })
    cy.get('.md-menu > .md-raised').click() 
    cy.contains("Exportar para Pedido").click({ timeout: 20000 })
    cy.get('.layout-row > .md-raised').click({ timeout: 20000 })
    cy.get('.swal2-confirm').click({ timeout: 20000 })
    cy.wait(5000)
    //agora para nota de saida.
    cy.get('.md-menu > .md-raised').click({ timeout: 30000 })
    cy.contains("Exportar para documento").click({ timeout: 20000 })
    cy.get('.swal2-popup').should("contain", "Faturar pedido")
    cy.get('.swal2-confirm').click({ timeout: 20000 })
    cy.wait(5000)
    cy.get('.swal2-confirm').should("contain", "faturado")
    cy.get('.swal2-confirm').click({ timeout: 20000 })



    
  });
 

});
