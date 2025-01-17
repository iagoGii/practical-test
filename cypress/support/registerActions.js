function preencherCampo(selector, value) {
  cy.get(selector).type(value);
}

export function populateCadastroForm(cpf) {
  preencherCampo('#picpay-lp-parent-cpf-value', cpf);
  cy.get('.sc-1k884s8-1 > .sc-1k884s8-0 > .sc-y3250c-0').click();
  preencherCampo('#CPF', cpf);
  preencherCampo('#Nome', "Nome Fictício");
  preencherCampo('#E-mail', "email.ficticio@example.com");
  preencherCampo('#Celular', "11987654321");
  preencherCampo('[placeholder="Data de nascimento*"]', "02021992");
  cy.get('[role="checkbox"]').click().should('have.attr', 'aria-checked', 'true');
}

export function sendCadastroForm() {
  cy.get('button[type="submit"][form="leads-form"]').click();
}

export function checkInvalidCPF() {
  cy.get('#CPF').parent().contains('CPF inválido').should('be.visible');
}