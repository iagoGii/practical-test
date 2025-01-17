export function attemptLoginWithInvalidCPF(username, password) {
  cy.contains('Área do cliente').click();
  cy.contains('Acesse sua conta').should('be.visible');
  cy.get('[name="username"][inputmode="numeric"]').type(username);
  cy.get('[name="password"][inputmode="numeric"]').type(password);
  cy.get('button[type="submit"]').click();
}

export function checkLoginError() {
  cy.contains('Opa! Digite seu CPF corretamente.').should('be.visible');
}