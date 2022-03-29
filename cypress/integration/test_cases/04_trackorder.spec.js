///<reference types = 'cypress'/>

import TrackOrderPO from "../../support/page_objects/TrackOrderPO"

describe('Track Order Page',()=>{

    const trackorderpo = new TrackOrderPO();

    beforeEach('Run before each it blocks',()=>{
        cy.visit(Cypress.env('trackOrderUrl'));
    })

    context('URL and titles verification',()=>{
        it('Url should contain track keyword',()=>{
            cy.url().should('include', '/track')
        })
    
        it('Title should be equal',()=>{
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        })
    })

    context('Text verification area for the page',()=>{
        it("Search top area of header should contain 'Track Anytime Anywhere'",()=>{
            trackorderpo.verifySearchAreaTopHeader();    
        })

        it("Search top area of paragraph 'Track your order from here'",()=>{
            trackorderpo.verifySearchAreaTopParagraph();   
        })

        it.only("Search details area should contain 'Please Type Order Id Or AWB Number To Track Your Order'",()=>{
            trackorderpo.verifySearchDetailsArea();     
        })
    })

    context('Search functionality test',()=>{
        it('Search feature should provide the correct result after putting valid existing order ID',()=>{
            trackorderpo.inputOrderId('');
            trackorderpo.clickOnSearch();
        })

        it.only('Search feature should not provide any result after putting invalid or non-existing order ID',()=>{
            trackorderpo.inputOrderId('xyz123');
            trackorderpo.clickOnSearch();

            //Verify for unsucessful search
            trackorderpo.verifyUnsuccessfulSearch();
        })
        
    })
})