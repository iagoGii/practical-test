export function navigateToLandingPage() {
  cy.visit('https://picpay.com/');
}

export function confirmPrivacyPopup() {
  cy.get('#onetrust-accept-btn-handler', { timeout: 5000 })
    .should('be.visible')
    .then(($button) => {
      if ($button.is(':visible')) {
        cy.wrap($button).click();
      }
    });
}