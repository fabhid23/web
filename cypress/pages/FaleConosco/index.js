class FaleConosco {

    Contatar () {
        cy.get(`.contact-form h2`)
        .should('be.visible')
        .and('have.text', 'Get In Touch')
        cy.get('[data-qa="name"]').type('Tester QA')
        cy.get('[data-qa="email"]').type('test_QA-123@meil.com')
        cy.get('[data-qa="subject"]').type('Sugestão')
        cy.get('[data-qa="message"]').type('Estou interessado em este produto')
        cy.fixture('example.json').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click() 
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    }
}

export default new FaleConosco()