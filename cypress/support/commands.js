// Adicionando comando para selecionar elementos usando CSS ou XPath
Cypress.Commands.add('pickElement', (selector) => {
  const isXPath = selector.startsWith('//') || selector.startsWith('(');
  return isXPath ? cy.xpath(selector) : cy.get(selector);
});

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />