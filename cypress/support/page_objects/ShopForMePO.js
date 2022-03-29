class ShopForMePO{
    //-----------------------------Text Verification---------------------------------------//
    verifyHeaderAreaText(){
        const headerAreaText = cy.get('.title-inner1');
        headerAreaText.should('be.visible');
        headerAreaText.should('contain','Shop For Me');
    }

    verifyHeaderParagrapgh(){
        const headerParagraph = cy.get('.text-center.d-none');
        headerParagraph.should('be.visible');
        headerParagraph.should('contain','Do You Have More Links click here');
    }

    //------------------------------Product Input form------------------------------------//
    inputProductLink(link){
        const productLinkField = cy.get('#product_link');
        productLinkField.should('be.visible');
        productLinkField.clear();
        productLinkField.type(link);
    }

    selectCountryFromDestinationDropdown(){
        const originCountryDropdown = cy.get('#origin_country');
        originCountryDropdown.select('USA');
    }

    selectCountryFromOriginDropdown(){
        const destinationCountryDropdown = cy.get('#destination_country');
        destinationCountryDropdown.select('Bangladesh');
    }

    inputCoupnCode(code){
        const couponCodeField = cy.get('.form-row > :nth-child(4) > input');
        couponCodeField.should('be.visible');
        couponCodeField.clear();
        couponCodeField.type(code);
    }

    inputProductName(name){
        const productNameField = cy.get('.col-md-6 > .p_description');
        productNameField.should('be.visible');
        productNameField.clear();
        productNameField.type(name);
    }

    inputProductWeight(weight){
        const productWeightField = cy.get(':nth-child(8) > .p_description');
        productWeightField.should('be.visible');
        productWeightField.clear();
        productWeightField.type(weight);
    }

    selectCategoryGearAndGadget(){
        cy.get(':nth-child(9) > select').select('Gear & Gadgets');
    }

    inputColor(color){
        const colorField = cy.get(':nth-child(10) > input');
        colorField.should('be.visible');
        colorField.clear();
        colorField.type(color);
    }

    inputModel(model){
        const modelField = cy.get(':nth-child(11) > input');
        modelField.should('be.visible');
        modelField.clear();
        modelField.type(model);
    }

    inputQuantity(quantity){
        const quantityField = cy.get('.quantity_1_1');
        quantityField.should('be.visible');
        quantityField.clear();
        quantityField.type(quantity);
    }

    inputProductPrice(price){
        const productPriceField = cy.get('.col-md-9 > .p_description');
        productPriceField.should('be.visible');
        productPriceField.clear();
        productPriceField.type(price);
    }

    clickOnGetPriceButton(){
        const getPriceButton = cy.get('.confirm-btn');
        getPriceButton.should('be.visible');
        getPriceButton.click();
    }

    verifyProductConfirmationAlert(){
        const productConfirmationAlert = cy.get('.alert > h2');
        productConfirmationAlert.should('be.visible');
        productConfirmationAlert.should('contain','Calculated Price');
    }

    continueShopping(){
        const continueShoppingButton = cy.get('.custom-btn');
        continueShoppingButton.should('be.visible');
        continueShoppingButton.click();
    }

    //----------------------------------Add a new product--------------------------------//
    addAnotherNewProduct(){
        const addNewProductButton = cy.get('.add-new');
        addNewProductButton.should('be.visible');
        addNewProductButton.click();
    }

    //-------------------------------------Delete/Clearing data------------------------//
    clearDataFromAddedProduct(){
        const deleteData = cy.get('.clear-data');
        deleteData.should('be.visible');
        deleteData.click();
    }

    //----------------------------------Need Help Area--------------------------------//
    verifyNeedHelpText(){
        const needHelpButtonText = cy.get('.text-center > .btn') ;
        needHelpButtonText.should('be.visible');
        needHelpButtonText.should('contain','Need Help With Shopping');
    }


}
export default ShopForMePO;