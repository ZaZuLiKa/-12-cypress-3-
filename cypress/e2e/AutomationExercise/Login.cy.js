describe('Login', () => {
  beforeEach(() => {
    //Launch browser
    2. //Navigate to url 'http://automationexercise.com'
    cy.visit('/')
    3. //Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').should('have.text', ' Signup / Login').click();
    // 5. Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should('be.visible')
  });
  it('Test Case 2: Login User with correct email and password', () => {
    // 6. Enter correct email address and password
    cy.ValidAuthorization()
    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    // 8. Verify that 'Logged in as username' is visible
    cy.VerifyLoggedUser()
    // 9. Click 'Delete Account' button
    cy.DeleteAccount()
    // 10. Verify that 'ACCOUNT DELETED!' is visible
    cy.get('[data-qa="account-deleted"]').should('be.visible')
  })
  it('Test Case 3: Login User with incorrect email and password', () => {
    
    // 6. Enter incorrect email address and password
    cy.InvalidAuthorization()
    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.get('.login-form > form > p').should('be.visible').contains('Your email or password is incorrect!')
  })
})