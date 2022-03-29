///<reference types = 'cypress'/>

import ServicesPO from "../../support/page_objects/ServicesPO";

describe('Services Area',()=>{
    
    const servicespo = new ServicesPO();

    context('Shipping and Refund Policy verification',()=>{
            
        it('Url should contain shipping-refund-policy.pdf',()=>{
            cy.request(Cypress.env('shippingPolicyUrl'));
            cy.url().should('include', '/shipping-refund-policy.pdf')
        });

        it('Title should be equal',()=>{
            cy.request(Cypress.env('shippingPolicyUrl'));
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        });
    });

    context('Privacy policy verification',()=>{
        it('Url should contain Privacy Policy keyword',()=>{
            cy.visit(Cypress.env('privacyPolicyUrl'));
            cy.url().should('include', '/privacy-policy')
        });

        it('Title should be equal',()=>{
            cy.visit(Cypress.env('privacyPolicyUrl'));
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        });

        it('Title should be equal',()=>{
            cy.visit(Cypress.env('privacyPolicyUrl'));
            servicespo.verifyHeaderContent();
        });
    });
})