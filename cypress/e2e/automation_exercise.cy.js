// <reference types="cypress" />
// pom - page object model
import cadastro from '../pages/cadastro'
import login from '../pages/login';
import menu from '../pages/menu';
import faleConosco from '../pages/FaleConosco';
import produtos from '../pages/produtos';
import pagamento from '../pages/pagamento';

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains(" Signup / Login").should("be.visible");  
    });
    it('Test Case 1: Register User', () => {
        menu.irParaLoginCadastro();
        cadastro
          .preencherFormulario()
          .VerificarSeCadastroFoiConcluido()
    });

     it('Test Case 2: Login User with correct email and password', () => {
        menu.irParaLoginCadastro()
        login.ValidarOTextoExibidoTelaLogin()
        login.preencherLogin('test_QA-1722798746869@meil.com', '1234')
        //assert - verificacao da saida do teste / comportamento esperado
        cadastro.VerificarUsuarioCadastradoEstaCorreto()
    });

     it('Test Case 3: Login User with incorrect email and password', () => {
        menu.irParaLoginCadastro()
        login.ValidarOTextoExibidoTelaLogin() 
        login.preencherLogin('test_QA-1722798746869@meil.com', '54321')
        //assert - verificacao da saida do teste / comportamento esperado
        login.ValidarMensagemErroEmailSenha()
     });

     it('Test Case 4: Logout User', () => {
        menu.irParaLoginCadastro()
        login.ValidarOTextoExibidoTelaLogin() 
        login.preencherLogin('test_QA-1722798746869@meil.com', '1234')
        //assert - verificacao da saida do teste / comportamento esperado
        cadastro.VerificarUsuarioCadastradoEstaCorreto()
        //act - acao principal
        login.IrParaTelaDeLogin()
        //assert - verificacao da saida do teste / comportamento esperado
        login.ValidarOTextoExibidoTelaLogin()    
     });

     it('Test Case 5: Create User with already registered email', () => {
        menu.irParaLoginCadastro()
        login.ValidarOTextoExibidoTelaLogin()  
        cadastro.iniciarCadastro(`test_QA-1722798746869@meil.com`)   
        //assert
        login.ValidarEmailJaExistente()
     });

     it('Test Case 6: Contact Us Form', () => {
        menu.irParaFaleConosco()
        faleConosco.Contatar()
        //assert
        cy.get('.status')
          .should('have.text', 'Success! Your details have been submitted successfully.')
     });

     it('Test Case 8: Verify All Products and products detail page', () => {
        menu.irParaProdutos()
        produtos.TodosProdutosTela()
        produtos.ClicarNoPrimeiroProduto()
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
     });

     it('Test Case 9: Search Product', () => {
        menu.irParaProdutos()
        produtos.TodosProdutosTela()
        produtos.DigitarUmProduto()
        produtos.ResultadoProdutoDigitado()
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        cy.get('.single-products')
          .should('be.visible')
          .and('have.length.at.least', 1)
     });

     it('Test Case 10: Verify Subscription in home page', () => {      
        cy.get('input#susbscribe_email')
          .scrollIntoView()
          .type('test_QA-123@meil.com')
        cy.get('button#subscribe').click();
        cy.contains('You have been successfully subscribed!').should('be.visible');
     });

     it('Test Case 15: Place Order: Register before Checkout', () => {
        cadastro.preencherFormulario()
        cy.get('b').should('contain', 'Test QA0001')
        produtos.AdicionarProdutoCarrinho()
        produtos.ValidarTelaCheckout()
        produtos.AdicionarComentarioCheckout()
        pagamento.DadosPagamentoCartao()
        pagamento.PagarConfirmarOrdem()
        //apagar a conta
        cadastro.apagarConta()
        cy.get('[data-qa="continue-button"]').click()
    });
 
});