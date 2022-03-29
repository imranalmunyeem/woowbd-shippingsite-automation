class ShipForMePO{
    //-----------------------------Text Verification---------------------------------------//
    verifyHeaderAreaText(){
        const headerAreaText = cy.get('.heading_special');
        headerAreaText.should('be.visible');
        headerAreaText.should('contain','Ship For');
    }

    verifyHeaderParagrapgh(){
        const headerParagraph = cy.get('.section-headding > p');
        headerParagraph.should('be.visible');
        headerParagraph.should('contain','Ship Personal & Business Stuff Anywhere');
    }

    verifyShippingAlert(){
        const shippingAlert = cy.get('.alert > div');
        shippingAlert.should('be.visible');
        shippingAlert.should('contain','Any wrong declaration on product name & qty, You will be penalized from Dhaka customs about 500tk to 20,000tk.woow is not responsible for any penalty imposed.');
    }

    //-----------------------------Shipping Mark Details---------------------------------------//
    verifyShippingMarkName(){
        const shippingMark = cy.get('.card-body');
        shippingMark.should('be.visible');
        shippingMark.should('contain','oo | your name ')
    }

    verifyShippingMarkAddress(){
        const shippingMark = cy.get('.card-body');
        shippingMark.should('be.visible');
        shippingMark.should('contain','Ground Floor, 85-41 Eton Street, Jamaica')
    }

    verifyShippingMarkNumber(){
        const shippingMark = cy.get('.card-body');
        shippingMark.should('be.visible');
        shippingMark.should('contain','Tel: (646)249-5611')
    }

    verifyShippingMarkWarning(){
        const shippingMark = cy.get('.card-body');
        shippingMark.should('be.visible');
        shippingMark.should('contain','Must mention [oo] before/ after your name when you purchase from online.')
    }


    //-----------------------------Origin and Destination---------------------------------------//
    verifyOriginCountry(){
        const originAddressField = cy.get('#origin');
        originAddressField.should('contain','USA');
    }

    verifyDestinationCountry(){
        const destinationAddressField = cy.get('#destination');
        destinationAddressField.should('contain','Bangladesh');
    }

    //----------------------------------Upload----------------------------------------//
    clickOnUploadExcel(){
        const uploadExcelButton = cy.get('#excel_init');
        uploadExcelButton.should('be.visible');
        uploadExcelButton.click();
    }

    //--------------------------------------Download------------------------------------//
    clickOnDownload(){
        const downloadSampleFileButton = cy.get(':nth-child(2) > .btn');
        downloadSampleFileButton.should('be.visible');
        downloadSampleFileButton.click();
    }

    //--------------------------------------Add Order------------------------------------//
    inputProductName(productname){
        const productNameField = cy.get('.col-md-6 > .form-group > .link_paste_input');
        productNameField.should('be.visible');
        productNameField.clear();
        productNameField.type(productname);
        return this;
    }    

    inputQuantity(quantity){
        const quantityField = cy.get('.col-md-2 > .form-group > .link_paste_input');
        quantityField.should('be.visible');
        quantityField.clear();
        quantityField.type(quantity);
        return this;
    }  

    inputTrackingNumber(trackingnumber){
        const trackingNumberField = cy.get('#cartNO1');
        trackingNumberField.should('be.visible');
        trackingNumberField.clear();
        trackingNumberField.type(trackingnumber);
        return this;
    } 


    //--------------------------------------Add New Order------------------------------------//
    newOrder(){
        cy.get('.add-new-button').click();
    }

    //--------------------------------------Remove Order------------------------------------//
    removeOrder(){
        cy.get('.bg-danger').click();
    }

    //--------------------------------------Continue------------------------------------//
    submit(){
        cy.get('.submit').click();
    }

    //--------------------------------------Cancel------------------------------------//
    cancel(){
        cy.get('[type="reset"]').click();
    }

    //---------------------------------Verify Empty Order Submission----------------//
    verifyEmptyOrderSubmission(){
        const emptyInputFieldWarning = cy.get('#product_info/[1/]/[name/]-error');
        emptyInputFieldWarning.should('be.visible');
        emptyInputFieldWarning.should('contain','This field is required.'); 
    }
}
export default ShipForMePO;