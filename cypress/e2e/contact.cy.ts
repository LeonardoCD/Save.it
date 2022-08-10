/// <reference types="cypress" />

describe("empty spec", () => {
  it("Must create a contact", () => {
    //Acessa a home page e clica no botão de criar contato
    cy.visit("http://localhost:3000/");
    cy.get(".sc-bczRLJ > .sc-dkzDqf").click();
    //Preenche o formulário com os dados do contato
    cy.get("#name").type("Gandalf");
    cy.get("#lastName").type("the Grey");
    cy.get("#telephone").type("95 981712256");
    cy.get("#email").type("gandalf.gray@me.com");

    cy.get("#cep").type("08111370");
    cy.get(".sc-bczRLJ > .sc-dkzDqf").click();
    cy.get("#number").type("117");
    cy.get("#complement").type("Apto. 121B");
    cy.get(".Toastify__toast-container").click();

    //Clica no botão de salvar
    cy.get(".jKtaeM").click();
  });

  it("Must edit a contact", () => {
    cy.get(":nth-child(7) > .sc-bczRLJ > .shRub").click();
    cy.get("#lastName").clear().type("the White");
    cy.get("#telephone2").type("92 991180109");

    cy.get("#cep").clear().type("13069470");
    cy.get(".sc-bczRLJ > .sc-dkzDqf").click();
    cy.get(".Toastify__toast-container").click();

    cy.get(".jKtaeM").click();

    cy.get(":nth-child(7) > .sc-jSMfEi").click();
    cy.get(".Toastify__toast-container").click();
  });
});
