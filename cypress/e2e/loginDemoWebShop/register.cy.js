describe("Register valid and invalid Tests", () => {
    beforeEach(() => {
      cy.visit("/register")
    })
  
    it("Valid register", () => {
        cy.fixture("register").then((data) => {
          cy.get("#FirstName").type(data.firstName)
          cy.get("#LastName").type(data.lastName)
          cy.get("#Email").type(data.email)
          cy.get("#Password").type(data.password)
          cy.get("#ConfirmPassword").type(data.confirmPassword)
    
          cy.get('#register-button').click()

        // Email belum pernah dibuatkan registrasi
          cy.get('.result')
        })
      })

      it("Invalid register because email already exist", () => {
        cy.fixture("register").then((data) => {
          cy.get("#FirstName").type(data.firstName)
          cy.get("#LastName").type(data.lastName)
          cy.get("#Email").type(data.email)
          cy.get("#Password").type(data.password)
          cy.get("#ConfirmPassword").type(data.confirmPassword)
    
          cy.get('#register-button').click()

        // Email sudah pernah dipakai register
          cy.get('.validation-summary-errors > ul > li')
        })
      })
  })
  