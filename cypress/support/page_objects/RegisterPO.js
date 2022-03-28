class RegisterPO{
    inputName(name){
        const nameField = cy.get('#name');
        nameField.should('be.visible');
        nameField.clear();
        nameField.type(name);
        return this;
    } 

    inputEmailAddress(email){
        const emailField = cy.get('#email');
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
        return this;
    }

    inputPassword(password){
        const passwordField = cy.get('#password');
        passwordField.should('be.visible');
        passwordField.clear();
        passwordField.type(password);
        return this;
    }

    inputConfirmPassword(confirmpassword){
        const confirmPasswordField = cy.get('#password-confirm');
        confirmPasswordField.should('be.visible');
        confirmPasswordField.clear();
        confirmPasswordField.type(confirmpassword);
        return this;
    }

    clickOnRegister(){
        const registerButton = cy.get('.col-md-6 > .btn');
        registerButton.should('be.visible');
        registerButton.click();
    }

    signupWithGoogle(){
        const googleButton = cy.get('.btn-google');
        googleButton.should('be.visible');
        googleButton.click();
    }

    googleResponse(){
        const response = cy.get(':nth-child(2) > ins');
        response.should('contain', 'That’s an error.')
    }

    signupWithFacebook(){
        const facebookButton = cy.get('.btn-facebook')
        facebookButton.should('be.visible');
        facebookButton.click();
    }

    facebookResponse(){
        const response = cy.get('.phl > :nth-child(1)')
        response.should('contain', "There was a problem with this request. We're working on getting it fixed as soon as we can.")
    }
}
export default RegisterPO;