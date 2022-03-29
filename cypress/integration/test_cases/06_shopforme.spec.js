///<reference types = 'cypress'/>

import ShopForMePO from "../../support/page_objects/ShopForMePO";

describe('Ship for me page',()=>{

    const shopformepo = new ShopForMePO();

    beforeEach('Run before each it block',()=>{
        cy.visit(Cypress.env('shopForMeUrl'));
    })

    context('URL and titles verification',()=>{
        it('Url should contain shipforme keyword',()=>{
            cy.url().should('include', '/shopforme')
        });
    
        it('Title should be equal',()=>{
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        });
    });

    context('Content verification area for the page',()=>{
        it("Top area header should contain 'Shop For Me'",()=>{
             shopformepo.verifyHeaderAreaText();
        });

        it("Top area paragraph should contain 'Do You Have More Links click heree'",()=>{
             shopformepo.verifyHeaderParagrapgh();
        });
    });

    context('Shop for me input form verification',()=>{
        it('From with valid inputs should be added successfully',()=>{
             shopformepo.inputProductLink('https://www.amazon.com/Apple-iPad-Air-10-9-inch-Wi-Fi-64GB/dp/B08J5WFP7B/ref=sr_1_2?keywords=apple&qid=1648565906&sr=8-2');
             shopformepo.selectCountryFromDestinationDropdown();
             shopformepo.selectCountryFromOriginDropdown();
             shopformepo.inputCoupnCode('OFF20');
             shopformepo.inputProductName('apple ipad');
             shopformepo.inputProductWeight('100');
             shopformepo.selectCategoryGearAndGadget();
             shopformepo.inputColor('Red');
             shopformepo.inputModel('product123');
             shopformepo.inputQuantity('20');
             shopformepo.inputProductPrice('56USD');
             shopformepo.clickOnGetPriceButton();

             //Confirmation Alert
             shopformepo.verifyProductConfirmationAlert();
             shopformepo.continueShopping();
        });

        it('Adding an another new product should be successful',()=>{
            shopformepo.addAnotherNewProduct();
            shopformepo.inputProductLink('https://www.amazon.com/Apple-iPad-Air-10-9-inch-Wi-Fi-64GB/dp/B08J5WFP7B/ref=sr_1_2?keywords=apple&qid=1648565906&sr=8-2');
            shopformepo.selectCountryFromDestinationDropdown();
            shopformepo.selectCountryFromOriginDropdown();
            shopformepo.inputCoupnCode('OFF20');
            shopformepo.inputProductName('apple ipad');
            shopformepo.inputProductWeight('100');
            shopformepo.selectCategoryGearAndGadget();
            shopformepo.inputColor('Red');
            shopformepo.inputModel('product123');
            shopformepo.inputQuantity('20');
            shopformepo.inputProductPrice('56USD');
            shopformepo.clickOnGetPriceButton();

            //Confirmation Alert
            shopformepo.verifyProductConfirmationAlert();
            shopformepo.continueShopping();
       });
    
       it('Clearing data from added product should be successful',()=>{
        shopformepo.addAnotherNewProduct();
        shopformepo.inputProductLink('https://www.amazon.com/Apple-iPad-Air-10-9-inch-Wi-Fi-64GB/dp/B08J5WFP7B/ref=sr_1_2?keywords=apple&qid=1648565906&sr=8-2');
        shopformepo.selectCountryFromDestinationDropdown();
        shopformepo.selectCountryFromOriginDropdown();
        shopformepo.inputCoupnCode('OFF20');
        shopformepo.inputProductName('apple ipad');
        shopformepo.inputProductWeight('100');
        shopformepo.selectCategoryGearAndGadget();
        shopformepo.inputColor('Red');
        shopformepo.inputModel('product123');
        shopformepo.inputQuantity('20');
        shopformepo.inputProductPrice('56USD');
        shopformepo.clearDataFromAddedProduct();
   });

   it('From with empty input fields should be added successfully',()=>{
    shopformepo.clickOnGetPriceButton();
    });
});

   context('Need help with shopping',()=>{
    it("Need help should contain 'Need help with shopping'",()=>{
         shopformepo.verifyNeedHelpText();
    });

});

});

