/// <reference types="Cypress" />
const faker = require("faker");
import loc from "../../../../support/locators";

context("Testar o Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(loc.login.user).type(`${Cypress.env("usuario")}`); //variavel e locators
    cy.get(loc.login.password).clear().type(`${Cypress.env("senha")}`); //variavel e locators
    cy.get("[class=ng-scope]").should("contain", "ACESSAR");
    cy.contains("ACESSAR").click({ timeout: 20000 });
    cy.contains("Selecionar...").click({ timeout: 10000 });
    cy.contains("CONTROLE DE QUALIDADE AUTOMAÇÃO").click({ timeout: 10000 });
    cy.get(".ui-select-match-text > .ng-binding").should("contain", "CONTROLE DE QUALIDADE AUTOMAÇÃO");
    cy.contains("SELECIONAR FILIAL").click({ timeout: 20000 });
    cy.get("[class=ng-binding]").should("contain", "Inicio");
    //abrir a navigator bar
    cy.wait(1000);
    cy.get(loc.menu.navigator).click({ timeout: 20000 }); //locators
    cy.wait(1000);
    cy.get(loc.menu.fixar).click({ timeout: 20000 }); //locators
  });
  
  it("listagem - Criar -  ", () => {
    //seleciona cliente no menu
    cy.get(loc.faturamento.icone).click({ timeout: 20000 });
    cy.get(loc.faturamento.pedido).click({ timeout: 20000 });
    cy.get(loc.menu.caminho).should("contain", "Pedido de venda");
    //Fechar navigator bar
    cy.get(loc.menu.fixar).click({ timeout: 10000 });
    cy.wait(1000);
    //verifica acentuação
    cy.get(loc.menu.painel).should("contain", "Vendedor");
    cy.get(loc.menu.painel).should("contain", "Operação");
    cy.get(loc.menu.painel).should("contain", "Série");
    //adicionar
    cy.get(loc.faturamento.adicionar).click();
    cy.get(".breadcrumb > :nth-child(4) > .ng-binding").should("contain", "Cadastrar");
    //verificar clica em juridia e verifica razao
 
    
  });
 

});
