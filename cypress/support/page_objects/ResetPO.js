class ResetPO{
    inputEmailAddress(email){
        const emailField = cy.get('#email');
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
        return this;
    }
    
    clickOnResetButton(){
        cy.get('.col-md-6 > .btn').click();
    }
}
export default ResetPO;