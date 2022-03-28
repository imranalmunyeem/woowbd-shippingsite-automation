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



    signupWithFacebook(){
        const facebookButton = cy.get('.btn-facebook')
        facebookButton.should('be.visible');
        facebookButton.click();
    }


}
export default RegisterPO;