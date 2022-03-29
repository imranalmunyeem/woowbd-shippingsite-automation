///<reference types = 'cypress'/>

describe('Social Links',()=>{

    context('Facebook link verification',()=>{
            
        it('Url should be navigated to facebook after clicking on it',()=>{
            cy.visit(Cypress.env('facebookUrl'));
            cy.url().should('eq','https://www.facebook.com/woowglobal/');
        });
    });

    context('Linkedin link verification',()=>{
            
        it('Url should be navigated to linkedin after clicking on it',()=>{
            cy.visit(Cypress.env('linkedinUrl'));
            cy.url().should('eq','https://www.linkedin.com/company/woow-bd/');
        });
    });

    context('Instagram link verification',()=>{
            
        it('Url should be navigated to instagram after clicking on it',()=>{
            cy.visit(Cypress.env('instagramUrl'));
            cy.url().should('eq','https://www.instagram.com/woowtechnologiesltd/?hl=en');
        });
    });

})