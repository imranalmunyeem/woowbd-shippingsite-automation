class ContactBoxPO{
    //-------------------------------Contact Information-----------------------------------//
    verifyContactBoxHeader(){
        const contactHeader = cy.get('.col-lg-5 > h2');
        contactHeader.should('be.visible');
        contactHeader.should('contain','Want Us To Contact?');
    }

    verifyContactBoxHeaderParagraph(){
        const contactHeaderParagraph = cy.get('.col-lg-5 > p');
        contactHeaderParagraph.should('be.visible');
        contactHeaderParagraph.should('contain','Send us your email address so that we can contact & discuss about your needs.');
    }

    //-------------------------------Contact Functionality-------------------------------//
    inputEmail(email){
        const emailField =cy.get('#subscribeEmail');
        emailField.should('be.visible');
        emailField.clear();
        emailField.type(email);
    }

    submit(){
        cy.get('#Layer').click();
    }
}
export default ContactBoxPO;