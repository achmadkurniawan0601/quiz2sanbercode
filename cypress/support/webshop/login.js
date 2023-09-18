class loginPage{
    imel = 'input[id="Email"]'
    passw = 'input[id="Password"]'
    subm = 'form > .buttons > .button-1'

    isiEmail(columnEmail){
        cy.get(this.imel).type(columnEmail)
    }

    isiPassword(columnPassword){
        cy.get(this.passw).type(columnPassword)
    }

    clickLogin(){
        cy.get(this.subm).click()
    }

}

export default new loginPage