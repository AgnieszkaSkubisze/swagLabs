
export function logInWithCredentials(userType:string){
    cy.get('[data-test="username"]').type(Cypress.env(userType));
    cy.get('[data-test="password"]').type(Cypress.env('password')); 
}