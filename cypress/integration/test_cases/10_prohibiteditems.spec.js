///<reference types = 'cypress'/>

describe('Prohibited items page',()=>{

    context('Url and title verification',()=>{
            
        it('Url should contain prohibited item',()=>{
            cy.visit(Cypress.env('prohibitedItemsUrl'));
            cy.url().should('include', '/Prohibited_items.pdf')
        });
    });

})