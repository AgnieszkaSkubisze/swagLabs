import { logInWithCredentials } from '../support/sharedFunction';

describe('Product order verification tests', () => {
  it('Buy first element in order page', () => {
    cy.visit('/')
    logInWithCredentials('standardUserName');
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('be.visible').click();
    cy.get('.title')
    .should('be.visible')
    .and('contain', 'Your Cart')
});
it('Сheck that the product is added and removed from the basket', () => {
    cy.visit('/')
    logInWithCredentials('standardUserName');
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('be.visible').click();
    cy.get('.title')
    .should('be.visible')
    .and('contain', 'Your Cart');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').should('be.visible');
    cy.get('.shopping_cart_badge').should('not.exist');
});
})