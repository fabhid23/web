class Login {
    preencherLogin(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario)
        cy.get('[data-qa="login-password"]').type(senha, { log: false })
        cy.get('[data-qa="login-button"]').click()
    }

    ValidarMensagemErroEmailSenha(){
        cy.get('.login-form form p').parent().should('contain', 'Your email or password is incorrect')
    }

    IrParaTelaDeLogin(){
        cy.contains('Logout').click();
    }

    ValidarOTextoExibidoTelaLogin(){
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible");   
    }
    ValidarEmailJaExistente(){
        cy.get('.signup-form form p')
          .should('be.visible')
          .and('contain', 'Email Address already exist!')
    }
}

export default new Login()