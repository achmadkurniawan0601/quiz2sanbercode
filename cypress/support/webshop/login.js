class loginPage{
    email = 'input[id="Email"]'
    password = 'input[id="Password"]'
    submit = 'input[class="buttons"]'

    isiEmail(columnEmail){
        cy.get(this.kolomEmail).type(columnEmail)
    }

    isiPassword(columnPassword){
        cy.get(this.kolomPassword).type(columnPassword)
    }

    register(){
        cy.get(this.submit).click()
    }

}

export default new loginPage