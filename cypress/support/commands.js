import userData from '../fixtures/Data.json'

Cypress.Commands.add('InitialSignup',()=>{
    cy.get('[data-qa="signup-name"]').type(userData.PersonalInfo.FirstName)
    cy.get('[data-qa="signup-email"]').type(userData.PersonalInfo.Email)
})
Cypress.Commands.add('FillData',()=>{
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    if(userData.PersonalInfo.Gender=="Male"){
        cy.get('#id_gender1').check();
    }else{
        cy.get('#id_gender2').check();
    }
    cy.get('[data-qa="name"]').should('have.value',userData.PersonalInfo.FirstName)
    cy.get('[data-qa="email"]').should('have.value',userData.PersonalInfo.Email)
    cy.get('[data-qa="password"]').type(userData.Authorization.Password)
    cy.get('[data-qa="days"]').select(userData.PersonalInfo.Birthday)
    cy.get('[data-qa="months"]').select(userData.PersonalInfo.BirthMonth)
    cy.get('[data-qa="years"]').select(userData.PersonalInfo.BirthYear)
    
})
Cypress.Commands.add('FillDetails',()=>{
    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type(userData.PersonalInfo.FirstName)
    cy.get('[data-qa="last_name"]').type(userData.PersonalInfo.LastName)
    cy.get('[data-qa="company"]').type(userData.PersonalInfo.Company)
    cy.get('[data-qa="address"]').type(userData.PersonalInfo.Address1)
    cy.get('[data-qa="address2"]').type(userData.PersonalInfo.Address2)
    cy.get('[data-qa="country"]').select(userData.PersonalInfo.Country)
    cy.get('[data-qa="state"]').type(userData.PersonalInfo.State)
    cy.get('[data-qa="city"]').type(userData.PersonalInfo.City)
    cy.get('[data-qa="zipcode"]').type(userData.PersonalInfo.Zip)
    cy.get('[data-qa="mobile_number"]').type(userData.PersonalInfo.Phone)
})
Cypress.Commands.add('VerifyLoggedUser',()=>{
    cy.contains(' Logged in as '+userData.PersonalInfo.FirstName)
})
Cypress.Commands.add("ValidAuthorization",()=>{
    cy.get('[data-qa="login-email"]').type(userData.Authorization.Email)
    cy.get('[data-qa="login-password"]').type(userData.Authorization.Password)
})
Cypress.Commands.add("DeleteAccount",()=>{
    cy.get('a[href="/delete_account"]').click()
})
Cypress.Commands.add("InvalidAuthorization",()=>{
    cy.get('[data-qa="login-email"]').type(userData.InvalidAuthorization.Email)
    cy.get('[data-qa="login-password"]').type(userData.InvalidAuthorization.Password)
})