class Produtos {

    TodosProdutosTela() {
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
    }

    DigitarUmProduto(){
        cy.get('input#search_product').type('Shirt')
    }

    ResultadoProdutoDigitado(){
        cy.get('button#submit_search').click()
    }

    AdicionarProdutoCarrinho(){
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
    }

    ClicarNoPrimeiroProduto(){
        cy.get('.single-products')
          .should('be.visible')
          .and('have.length.at.least', 1)
          .first()
          .parent()
          .contains('View Product')
          .click();
    }

    ValidarTelaCheckout(){
        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
    }

    AdicionarComentarioCheckout(){
        cy.get('.form-control').type('comment test')
    }


}

export default new Produtos()