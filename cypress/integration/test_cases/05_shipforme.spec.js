///<reference types = 'cypress'/>

import ShipForMePO from "../../support/page_objects/ShipForMePO";

describe('Ship for me page',()=>{

    const shipformepo = new ShipForMePO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('shipForMeUrl'));
    })

    context('URL and titles verification',()=>{
        it('Url should contain shipforme keyword',()=>{
            cy.url().should('include', '/shipforme')
        });
    
        it('Title should be equal',()=>{
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        });
    });

    context('Content verification area for the page',()=>{
        it("Top area header should contain 'Shipping For'",()=>{
            shipformepo.verifyHeaderAreaText();    
        })

        it("Top area paragraph should contain 'Ship Personal & Business Stuff Anywhere'",()=>{
            shipformepo.verifyHeaderParagrapgh();   
        })
    });

    context('Shipping Mark details verification',()=>{
        it('Shipping mark name verification',()=>{
            shipformepo.verifyShippingMarkName();
        });

        it('Shipping mark address verification',()=>{
            shipformepo.verifyShippingMarkAddress();   
        });

        it('Shipping mark phone number verification',()=>{
            shipformepo.verifyShippingMarkNumber();  
        });

        it('Shipping mark warning verification',()=>{
            shipformepo.verifyShippingMarkWarning();
        });
    });

    context('Address verification',()=>{
        it("Shipping mark box should contain the address ",()=>{
            shipformepo.verifyShippingAlert();    
        });

        it("Origin country must be 'USA' ",()=>{
            shipformepo.verifyOriginCountry(); 
        })

        it("Destination country must be 'Bangladesh' ",()=>{
            shipformepo.verifyDestinationCountry();    
        })
    });

    context('Shipping verification',()=>{
        it("Shipping alert should contain 'Any wrong declaration on product name & qty, You will be penalized from Dhaka customs about 500tk to 20,000tk.woow is not responsible for any penalty imposed.'",()=>{
            shipformepo.verifyShippingAlert();    
        })
    });

    context('Upload verification',()=>{
        it('Test drag and drop file upload', ()=> {
            shipformepo.clickOnUploadExcel();
            const excelFilePath = 'woow_bulk_upload.xlsx';
            cy.get('#file').attachFile(excelFilePath);
        });
    });

    context('Download verification',()=>{
        const path = require("path");
        it('File download test', ()=> {
            shipformepo.clickOnDownload();

            //Verify Downloaded file
            const downloads = Cypress.config("downloads");
            cy.readFile(path.join(downloads, "woow_bulk_upload.xlsx")).should("exist");
        });
    });

    context('Order Functionality',()=>{
        it('Adding a new order should be successful', ()=> {
            shipformepo.inputProductName();
            shipformepo.inputQuantity();
            shipformepo.inputTrackingNumber();
            shipformepo.submit();
        });

        it('Adding another new order should be successful', ()=> {
            shipformepo.newOrder();
            shipformepo.inputProductName();
            shipformepo.inputQuantity();
            shipformepo.inputTrackingNumber();
            shipformepo.submit();
        });

        it('Cancelling the order should be successful', ()=> {
            shipformepo.cancel();
        });

        it('Adding an order with empty input fields should not be successful', ()=> {
            shipformepo.verifyEmptyOrderSubmission();
        });
    });
});