///<reference types = 'cypress'/>

import HomePagePO from "../../support/page_objects/HomePagePO";

describe('Home page',()=>{

    const homepagepo = new HomePagePO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    })

    context('URL and titles verification',()=>{
        it('Url should contain woowbd.com',()=>{
            cy.url().should('include', '/woowbd.com/')
        })
    
        it('Title should be equal',()=>{
            cy.title().should('eq', 'wOOw - Ecommerce | Export | Import | Transport | Courier | Cargo Worldwide')
        })
    })

    context('Header Area',()=>{
        it('Logo, Order, Track, Contact, Register, Login should be displayed in header area',()=>{
            homepagepo.verifyHeaderContentVisibility();
        })
    })

    context('Footer Area',()=>{
        it('Copyright details, terms, policy, cookies, social platform should be displayed in footer area',()=>{
            homepagepo.verifyfooterContentVisibility();
        })
    })
})