///<reference types = 'cypress'/>

import RegisterPO from "../../support/page_objects/RegisterPO";

describe('Registration Page',()=>{

    const registerpo = new RegisterPO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('registerUrl'));
    })
    
    context('Url and Title Area',()=>{
        it('Url should contain register keyword',()=>{
            cy.url().should('include', '/register')
        })
    
        it('Title should be equal',()=>{
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        })
    })

    context('Registration with user information',()=>{
        it('Registration should be successful with valid information', ()=>{
            registerpo.inputName('kurtis');
            registerpo.inputEmailAddress('kurtisraymonddierkes@gmail.com');
            registerpo.inputPassword('Demopasswordfortest');
            registerpo.inputConfirmPassword('Demopasswordfortest');
            registerpo.clickOnRegister();
        });
    
        it('Registration should not be successful with empty submission', ()=>{
            registerpo.clickOnRegister();
        });
    
        it('Registration should not be successful with invalid email address', ()=>{
            registerpo.inputName('kurtis');
            registerpo.inputEmailAddress('$@#^@gmail.com');
            registerpo.inputPassword('Demopasswordfortest');
            registerpo.inputConfirmPassword('Demopasswordfortest');
            registerpo.clickOnRegister();
        })
    
    context('Registration with Social Platforms',()=>{
        it('Registration should be successful with Google', ()=>{
            registerpo.signupWithGoogle();
            
            //Sign up response after clicking on google
            const response = cy.get(':nth-child(2) > ins');
            response.should('contain', 'That’s an error.');
        })

        it('Registration should be successful with facebook', ()=>{
            registerpo.signupWithFacebook();

            //Sign up response after clicking on facebook
            const facebookResponse = cy.get('.phl > :nth-child(1)');
            facebookResponse.should('contain', "There was a problem with this request. We're working on getting it fixed as soon as we can.");
        })
    })

    })

    
})
