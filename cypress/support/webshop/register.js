class registerPage{
    firstName = 'input[id="FirstName"]'
    lastName = 'input[id="LastName"]'
    email = 'input[id="Email"]'
    password = 'input[id="Password"]'
    submit = 'input[class="buttons"]'

    isiNamaDepan(columnFirstName){
        cy.get(this.kolomNamaDepan).type(columnFirstName)
    }

    isiNamaBelakang(columnLastName){
        cy.get(this.kolomNamaBelakang).type(columnLastName)
    }

    isiEmail(columnEmail){
        cy.get(this.kolomEmail).type(columnEmail)
    }

    isiPassword(columnPassword){
        cy.get(this.kolomPassword).type(columnPassword)
    }

    login(){
        cy.get(this.submit).click()
    }

    invalidLogin(){
        cy.contains('Login was unsuccessful. Please correct the errors and try again.')
    }
}

export default new registerPage