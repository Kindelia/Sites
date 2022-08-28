import {sizes} from '../../../utils';

describe('pages/index.tsx', () => {
  sizes.forEach((size) => {
    it(`should navigate to the main page on ${size} screen`, () => {
      cy.viewport(size);
      cy.visit('http://localhost:3001/');
      cy.url().should('include', '/');
    });
  });

  it('should click on the discord icon and redirected', () => {
    cy.visit('http://localhost:3001/');
    cy.get('[data-cy=discord]').click();
    cy.url().should('include', 'https://discord.com/invite/kindelia');
  });

  it('should click on the youtube icon and redirected', () => {
    cy.visit('http://localhost:3001/');
    cy.get('[data-cy=youtube]').click();
    cy.url().should('include', 'https://www.youtube.com/c/Kindelia');
  });

  it('should click on the twitter icon and redirected', () => {
    cy.visit('http://localhost:3001/');
    cy.get('[data-cy=twitter]').click();
    cy.url().should('include', 'https://twitter.com/KindeliaOrg');
  });

  it('should click on the github icon and redirected', () => {
    cy.visit('http://localhost:3001/');
    cy.get('[data-cy=github]').click();
    cy.url().should('include', 'https://github.com/Kindelia');
  });
});
