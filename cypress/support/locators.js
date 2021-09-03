const locators = {
login:{
    user:'#inputEmail',
    password:'#inputPassword'
},
descricao:{
    criar:'CYTESTE',
    editado:'CYEDITADO',
   

},
menu:{
    navigator:'#navigation-menu-fold-expander',
    fixar:'.fold-toggle',
    adicionar:'#btn-adicionar',
    caminho:':nth-child(3) > .ng-binding',
    atualiza:'.layout-row > :nth-child(1) > .md-raised > .fa',
    aviso:'.toast-message',
    fechaaviso:'.toast > .md-icon-button > .ng-scope',
},
integracao:{
    icone:':nth-child(1) > [href="#"] > .fi',
    cliente:'[style=""] > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    grupoCliente: '[style=""] > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    grupoFornecedor: ':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(2) > .navigation-menu-item > .navigation-menu-button > .title',
    fornecedor: ':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(1) > .navigation-menu-item > .navigation-menu-button > .title',
    adicionar:'#btn-adicionar > span.ng-scope'

    
},
financeiro:{
    icone:':nth-child(6) > a > .fi',
    contasreceber:':nth-child(1) > :nth-child(2) > ul.ng-scope > :nth-child(3) > .navigation-menu-item > .navigation-menu-button > .title',
    caminho:'.breadcrumb > :nth-child(4) > .ng-binding',
    adicionar:'[ng-click="ctrl.adicionarCadastro()"] > span.ng-scope',
}


}
export default locators;