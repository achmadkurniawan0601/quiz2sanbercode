import loginPage from '../../support/webshop/login'
const userr = require ('../../fixtures/invalidAccount.json')

describe("Login valid and invalid Tests", () => {
    beforeEach(() => {
      cy.visit("/login")
    })
  
    it("Login with invalid Account", () => {
        cy.fixture("invalidAccount").then((data) => {
          cy.get("#Email").type(data.email)
          cy.get("#Password").type(data.password)
          cy.get('form > .buttons > .button-1').click()
          cy.get('.validation-summary-errors > span')
        })
      })

    it("Login with email empty", () => {
        cy.fixture("invalidAccount").then((data) => {
          cy.get("#Email")
          cy.get("#Password").type(data.password)
          cy.get('form > .buttons > .button-1').click()
          cy.get('.validation-summary-errors > span')
        })
    })

    it("Login with password empty", () => {
        cy.fixture("invalidAccount").then((data) => {
          cy.get("#Email").type(data.email)
          cy.get("#Password")
          cy.get('form > .buttons > .button-1').click()
          cy.get('.validation-summary-errors > span')
        })
    })

    it("Login with email, and password empty", () => {
        cy.fixture("invalidAccount").then((data) => {
          cy.get("#Email")
          cy.get("#Password")
          cy.get('form > .buttons > .button-1').click()
          cy.get('.validation-summary-errors > span')
        })
    })
      
    it("Login with invalid Account", () => {
        cy.fixture("invalidAccount").then((data) => {
          cy.get("#Email").type(data.email)
          cy.get("#Password").type(data.password)
          cy.get('form > .buttons > .button-1').click()
          cy.get('.validation-summary-errors > span')
        })
      })
  
    it("Login with valid Account", () => {
      cy.fixture("validAccount").then((data) => {
        cy.get("#Email").type(data.email)
        cy.get("#Password").type(data.password)
  
        cy.get('form > .buttons > .button-1').click()
        cy.get('.header-links > ul > :nth-child(1) > .account')
      })
    })

    it("Login with valid Account and logout", () => {
        cy.fixture("validAccount").then((data) => {
          cy.get("#Email").type(data.email)
          cy.get("#Password").type(data.password)
    
          cy.get('form > .buttons > .button-1').click()
          cy.get('.header-links > ul > :nth-child(1) > .account')
          cy.get('.ico-logout').click()
        })
      })

    it.only('Login with POM with array 0 input', () => {
        loginPage.isiEmail(userr[0].email)
        loginPage.isiPassword(userr[0].password)
        loginPage.clickLogin()
    });

    it.only('Login with POM with array 1 input', () => {
        loginPage.isiEmail(userr[1].email)
        loginPage.isiPassword(userr[1].password)
        loginPage.clickLogin()
    });
  })
  