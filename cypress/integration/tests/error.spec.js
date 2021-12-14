describe("Etape va planter", () => {
  it("Grafikart doit arriver en premier", () => {
    cy.visit("https://www.google.com/");
    cy.get("#search_form_input_homepage").type("grafikart");
    cy.get("#search_button_homepage").click();
    cy.get("#web_content_wrapper").contains(
      "Grafikart - Tutoriels et Formations vidéos sur le"
    );
  });
});
