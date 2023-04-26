/// <reference types="cypress" />

describe('testes pagina', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('lista de contados deve ser 3 por padrao', () => {
    cy.get('.contato').should('have.length', 3);
  });

  it('testando inclusao', () => {
    cy.get('[type="text"]').type('francisco berti da cruz');
    cy.get('[type="email"]').type('fbc9911@gmail.com');
    cy.get('[type="tel"]').type('55.9.8142.6277');
    cy.get('.adicionar').click();
    cy.get('.contato').should('have.length', 4);
  });

  it('testando edicao', () => {
    cy.get('.contato .edit').last().click();
    cy.get('[type="text"]').clear().type('editado');
    cy.get('[type="email"]').clear().type('editado@editado');
    cy.get('[type="tel"]').clear().type('editado');
    cy.get('.alterar').click();
    cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should(
      'have.text',
      'editado'
    );
  });

  it('testando remocao', () => {
    cy.get('.contato .delete').last().click();
    cy.get('.contato').should('have.length', 3);
  });
});
