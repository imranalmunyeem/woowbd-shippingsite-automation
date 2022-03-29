class ServicesPO{
    //---------------------------------shipping-refund-policy---------------------------//
    //--------------------------------Privacy Policy------------------------------------//
    verifyHeaderContent(){
        const headerContentField = cy.get('h1');
        headerContentField.should('be.visible');
        headerContentField.should('contain','Privacy Policy');
    }
}
export default ServicesPO;