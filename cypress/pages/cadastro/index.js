class Cadastro {
    preencherFormulario(){
        const timestamp = new Date().getTime()
        cy.contains('Signup').click(); 
        const signUpName = 'Test QA0001'
        Cypress.env('signUpName', signUpName)
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`test_QA-${timestamp}@meil.com`)
        cy.contains('button','Signup').click()
        cy.get('input[type=radio').check('Mrs');
        cy.get('[type=password]').type('1234', {log: false}) //log oculta a senha
        cy.get('[data-qa="days"]').select('5')
        cy.get('[data-qa="months"]').select('July')
        cy.get('[data-qa="years"]').select('1994')
        cy.get('[type=checkbox]#newsletter').check()
        cy.get('[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('Carlos')
        cy.get('[data-qa="last_name"]').type('segundo')
        cy.get('[data-qa="company"]').type('Bomb')
        cy.get('[data-qa="address"]').type('Rua Teste 674')
        cy.get('[data-qa="country"]').type('India')
        cy.get('[data-qa="state"]').type('estado Teste')
        cy.get('[data-qa="city"]').type('Cidade Teste')
        cy.get('[data-qa="state"]').type('SP')
        cy.get('[data-qa="zipcode"]').type('74533')
        cy.get('[data-qa="mobile_number"]').type('22 333 4444')
        cy.get('[data-qa="create-account"]').click()
        cy.url()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        return this

    }

    iniciarCadastro(email){
        cy.get('[data-qa="signup-name"]').type('Tester QA')
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button','Signup').click()
        return this
    }

    VerificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        return this
    }

    VerificarUsuarioCadastradoEstaCorreto(){
        cy.get('i.fa-user').parent().should('contain', 'Test QA0001')
        return this
    }

    apagarConta(){
        cy.get('[href *="delete"]').click()
        cy.get('b').should('contain', 'Account Deleted!')
    }

}

export default new Cadastro()