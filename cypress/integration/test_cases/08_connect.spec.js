///<reference types = 'cypress'/>

import ConnectPO from "../../support/page_objects/ConnectPO";


describe('Home page',()=>{

    const connectpo = new ConnectPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    });

    context('Connect Area Contents Veification',()=>{
        it('Connect area should contain the correct contact email address',()=>{
            connectpo.verifyContactEmail();
        })

        it('Connect area should contain correct contact phone number',()=>{
            connectpo.verifyContactNumber();
        })
    })

});