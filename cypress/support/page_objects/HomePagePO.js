class HomePagePO{
    //------------------------------Header Area---------------------------------------//
    verifyHeaderContentVisibility(){
        const headerAreaField = cy.get('#myScrollspy');
        headerAreaField.should('contain','http://www.w3.org/2000/svg');
        headerAreaField.should('contain','USA Order Booking ');
        headerAreaField.should('contain','Track your order');
        headerAreaField.should('contain','Contact Us');
        headerAreaField.should('contain','Register');
        headerAreaField.should('contain','Login');
    }
    //------------------------------Footer Area---------------------------------------//
    verifyfooterContentVisibility(){
        const footerAreaField = cy.get('.col-md-3 > p');
        footerAreaField.should('contain','© 2022 wOOw Technologies Ltd.');
        footerAreaField.should('contain','Terms & Conditions');
        footerAreaField.should('contain','Privacy Policy');
        footerAreaField.should('contain','Cookies Policy ');
        footerAreaField.should('contain','https://www.facebook.com/woowglobal/');
        footerAreaField.should('contain','href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHFmCWaAOXGQQAAAXOJePNA069NGnaf1KGxtHtx12QzDUbK7UMCDqVSmxs8tWMKhI0REUUuwTaaGFIyFR7nK_XUtVu-aN7X3N2TQDEw8B4TOJzbI8lfgxtFq80K6EA_bTG72lE=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fwoow-bd');
        footerAreaField.should('contain','instagram');
    }
}
export default HomePagePO;