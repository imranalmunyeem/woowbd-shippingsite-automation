///<reference types = 'cypress'/>

import ContactBoxPO from "../../support/page_objects/ContactBoxPO";


describe('Home page',()=>{

    const contactboxpo = new ContactBoxPO();

    beforeEach('Run before each it block',()=>{
        cy.visit('/');
    })

    context('Contact Box content verification',()=>{
        it('Contact box header area should contain "Want Us To Contact?"',()=>{
            contactboxpo.verifyContactBoxHeader();
        });

        it('Contact box header paragraph area should contain "Send us your email address so that we can contact & discuss about your needs."',()=>{
            contactboxpo.verifyContactBoxHeaderParagraph();
        });

    });

    context('Contact functionality n',()=>{
        it.only('Contact submission should be successful with valid email address',()=>{
            contactboxpo.inputEmail('kurtisraymonddierkes@gmail.com');
            contactboxpo.submit();
        });

        it.only('Contact submission should not be successful with invalid email address',()=>{
            contactboxpo.inputEmail('@#$');
            contactboxpo.submit();
        });

        it.only('Contact submission should not be successful with empty input field',()=>{
            contactboxpo.submit();
        });

    });

})