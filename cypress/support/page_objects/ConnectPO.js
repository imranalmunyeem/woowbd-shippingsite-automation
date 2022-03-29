class ConnectPO{
    verifyContactEmail(){
        const contactInformationField = cy.get('ul > :nth-child(1) > p');
        contactInformationField.should('be.visible');
        contactInformationField.should('contain','info@woowbd.com');
    }

    verifyContactNumber(){
        const contactInformationField = cy.get('ul > :nth-child(1) > p');
        contactInformationField.should('be.visible');
        contactInformationField.should('contain','(+88)-01816369701')
    }
}
export default ConnectPO;