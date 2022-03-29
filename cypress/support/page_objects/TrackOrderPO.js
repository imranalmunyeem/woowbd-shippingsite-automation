class TrackOrderPO{

    verifySearchAreaTopHeader(){
        const searchAreaTopHeaderContent = cy.get('.search-area-top > h3');
        searchAreaTopHeaderContent.should('contain','Track Anytime Anywhere');
    }

    verifySearchAreaTopParagraph(){
        const searchAreaTopParagraph =  cy.get('.search-area-top > p');
        searchAreaTopParagraph.should('contain','Track your order from here');
    }

    verifySearchDetailsArea(){
        const searchDetailsAreaContent = cy.get('.search-details-area > h3').click();
        searchDetailsAreaContent.should('contain','Please Type Order Id Or AWB Number To Track Your Order');
    }

    inputOrderId(orderid){
        const orderIdField = cy.get('#trackid');
        orderIdField.should('be.visible');
        orderIdField.clear();
        orderIdField.type(orderid);
        return this;
    }

    clickOnSearch(){
        const searchButton = cy.get('[onclick="order_search()"]');
        searchButton.should('be.visible');
        searchButton.click();
    }

    verifyUnsuccessfulSearch(){
        const invalidOrderIdMessage = cy.get('.search-details-area > h3');
        invalidOrderIdMessage.should('contain','Order Not Found');
    }
}
export default TrackOrderPO;