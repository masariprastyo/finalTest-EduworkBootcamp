/// <reference types="cypress" />

describe('Payment using Midtrans', () => {
    it('Make Payment using Midtrans', () => {
      cy.visit('https://demo.midtrans.com/')
      cy.get('.btn.buy').click();
      
      cy.get('.cart-checkout').click();
      cy.wait(5000);
      cy.get('[class="page-container scroll"]').then( ($payments) => {
        cy.log($payments)
        });
        // cy.get('.button.btn.full.primary').click();
        // cy.get('#phoneNumber').type('08122222222');
        // cy.get('.button.btn.btn-primary').click();
    })
  })


     