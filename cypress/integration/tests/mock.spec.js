describe("Grafikart", () => {
  it("should display comment", () => {
    cy.server();
    cy.intercept("GET", "https://grafikart.fr/api/comments?content=87", {
      fixture: "comment.json",
    }).as("getComments");
    cy.visit("https://grafikart.fr/tutoriels/carrousel-javascript-87");
    cy.get(".comments__title").scrollIntoView().as("comments");
    cy.wait("@getComments");
    cy.get("@comments").contains("1 commentaire");
  });

  it("should display no comment", () => {
    cy.server();
    cy.intercept("GET", "https://grafikart.fr/api/comments?content=87", {
      fixture: "emptyarray.json",
    }).as("getComments");
    cy.visit("https://grafikart.fr/tutoriels/carrousel-javascript-87");
    cy.get(".comments__title").scrollIntoView().as("comments");
    cy.wait("@getComments");
    cy.get("@comments").contains("0 commentaire");
  });
});
