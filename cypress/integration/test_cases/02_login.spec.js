///<reference types = 'cypress'/>

import LoginPO from "../../support/page_objects/LoginPO";

describe('Login Page',()=>{

    const loginpo = new LoginPO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('loginUrl'));
    })

    context('URL and titles verification',()=>{
        it('Url should contain register keyword',()=>{
            cy.url().should('include', '/login')
        })
    
        it('Title should be equal',()=>{
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        })
    })
    

    context('Login with user information',()=>{
        it('Login should be successful with valid email address and password',()=>{
            loginpo.swipeToEmailLogin();
            loginpo.inputEmailAddress('kurtisraymonddierkes@gmail.com');
            loginpo.inputPassword('Demopasswordfortest');
            loginpo.clickOnLogin();
            loginpo.logout();
        })

        it('Login should not be successful with non existing email address and password',()=>{
            loginpo.swipeToEmailLogin();
            loginpo.inputEmailAddress('zqaabcqe13@gmail.com');
            loginpo.inputPassword('Demopasswordfortest');
            loginpo.clickOnLogin();

            //Login message for non existing credentials
            const nonexistingMessage = cy.get('.invalid-feedback > strong');
            nonexistingMessage.should('contain','These credentials do not match our records.');
        })

        it('Login should not be successful with empty input fields',()=>{
            loginpo.swipeToEmailLogin();
            loginpo.clickOnLogin();
        })

    context('Login with OTP',()=>{
        it('Login should be successful with existing phone number',()=>{
            loginpo.inputPhoneNumber('1788528367');
            loginpo.sendOTP();
        })

        it('Login should not be successful with non-existing phone number',()=>{
            loginpo.inputPhoneNumber('01678333234');
            loginpo.sendOTP();
            
        })

        it('Login should not be successful with empty field',()=>{
            loginpo.sendOTP();
            loginpo.clickOnVerify();

            //OTP error message for empty field
            const OTPErrorMessage = cy.get('#otp_error')
            OTPErrorMessage.should('contain','Otp Code Not Valid');
        })
        
    })
    })
})