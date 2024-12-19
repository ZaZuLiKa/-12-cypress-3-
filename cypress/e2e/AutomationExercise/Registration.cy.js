describe('Registration', () => {
  beforeEach(() => {
    //Launch browser
    2. //Navigate to url 'http://automationexercise.com'
    cy.visit('/')
    3. //Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
  });
  it('Test Case 1: Register User', () => {
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').should('have.text',' Signup / Login').click();
    // 5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should('be.visible')
    // 6. Enter name and email address
    cy.InitialSignup()
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains('Enter Account Information').should('be.visible')
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.FillData()
    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check()
    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check()
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.FillDetails()
    // 13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('[data-qa="account-created"]').should('be.visible')
    // 15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    // 16. Verify that 'Logged in as username' is visible
    cy.VerifyLoggedUser() 
  })
})