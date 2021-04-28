describe("DuckDuckGo", () => {
  it("Grafikart doit arriver en premier", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("grafikart");
    cy.get("#search_button_homepage").click();
    cy.get("#web_content_wrapper").contains(
      "Grafikart - Tutoriels et Formations vidéos sur le"
    );
  });
});
