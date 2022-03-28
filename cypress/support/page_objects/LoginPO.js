class LoginPO{
    inputPhoneNumber(phonenumber){
        const number = cy.get('#phone_number');
        number.should('be.visible');
        number.clear();
        number.type(phonenumber);
        return this;
    }

    sendOTP(){
        const OTP = cy.get('#sendOTP');
        OTP.should('be.visible');
        OTP.click();
    }

    inputOTP(otpnumber){
        const inputOTP = cy.get('#verifyOtpCode');
        inputOTP.should('be.visible');
        inputOTP.clear();
        inputOTP.type(otpnumber);
        return this;
    }

    clickOnVerify(){
        const verifyOTPButton = cy.get('#verifyOtp');
        verifyOTPButton.should('be.visible');
        verifyOTPButton.click();
    }


    swipeToEmailLogin(){
        const emailLogin = cy.get('.slide-controls > .signup');
        emailLogin.click();
    }

    inputEmailAddress(email){
        const emailField = cy.get('#email_login > :nth-child(2) > input')
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
        return this;
    }

    inputPassword(password){
        const passwordField = cy.get('#email_login > :nth-child(3) > input')
        passwordField.should('be.visible');
        passwordField.clear();
        passwordField.type(password);
        return this;
    }

    clickOnLogin(){
        const loginButton = cy.get('#email_login > .btn > input')
        loginButton.should('be.visible');
        loginButton.click();
    }

    logout(){
        const logoutButton = cy.get('.login-register-navbar-nav > :nth-child(2) > .nav-link');
        logoutButton.should('be.visible');
        logoutButton.click();
    }
}
export default LoginPO;