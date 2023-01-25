import { logInWithCredentials } from '../support/sharedFunction';

describe('Login and Logout test', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('Login with \'standard\' user', () => {
    logInWithCredentials('standardUserName');
    cy.get('[data-test="login-button"]').click()
});
  it('Login with \'locked out\' user', () => {
    logInWithCredentials('locked_out_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
});
it('Login with \'problem\' user', () => {
    logInWithCredentials('problem_user');
    cy.get('[data-test="login-button"]').click()
});
it('Login with \'standard\' user with log out action to check if inputs are empty', () => {
  logInWithCredentials('standardUserName');
  cy.get('[data-test="login-button"]').click();
  cy.get('button#react-burger-menu-btn').click();
  cy.get('a#logout_sidebar_link').click();
  cy.get('[data-test="username"]').should('be.empty');
  cy.get('[data-test="password"]').should('be.empty');
});
})