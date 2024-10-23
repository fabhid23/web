
import cadastro from '../cadastro'
class Menu{

    menus = {
        PRODUTOS: 'Products'
    }

    irParaProdutos() {
        cy.contains(`Products`).click()
    }

    irParaLoginCadastro() {
        cy.contains(` Signup / Login`).click()

        return cadastro
    }

    irParaFaleConosco() {
        cy.contains('Contact us').click();
    }

    irPara(menu) {
        cy.contains(menu).click()
    }
}



export default new Menu();