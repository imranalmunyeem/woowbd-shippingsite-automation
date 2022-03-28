///<reference types = 'cypress'/>

import ResetPO from "../../support/page_objects/ResetPO";

describe('Reset page',()=>{

    const resetpo = new ResetPO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('resetUrl'));
    })

    it('Resetting should be successful with existing valid email',()=>{
        resetpo.inputEmailAddress('kurtisraymonddierkes@gmail.com');
        resetpo.clickOnResetButton();

        //Verify for successful reset alert
        const resetAlert = cy.get('.card-body > .alert');
        resetAlert.should('contain','We have emailed your password reset link!');
    });
    

    it('Resetting should not be successful without waiting for a certain time',()=>{
        resetpo.inputEmailAddress('kurtisraymonddierkes@gmail.com');
        resetpo.clickOnResetButton();

        //Message
        const waitingMessage = cy.get('.invalid-feedback > strong');
        waitingMessage.should('contain','Please wait before retrying.');
    });

    it('Resetting should not be successfull with empty input field',()=>{
        resetpo.clickOnResetButton();
    });

    it('Resetting should not be successfull with non-existing email',()=>{
        resetpo.inputEmailAddress('zqaabcqe13@gmail.com');
        resetpo.clickOnResetButton();

        //Non-existing email message
        const nonExistingEmailMessage = cy.get('.invalid-feedback > strong');
        nonExistingEmailMessage.should('contain',"We can't find a user with that email address.");
    });
    
})