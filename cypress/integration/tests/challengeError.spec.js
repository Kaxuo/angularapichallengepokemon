describe("Pokemons List", () => {
  it("should be able to get a pokemon", () => {
    cy.visit("http://localhost:4200");
    cy.get(".data > .Name").contains("bulbasaur");
  });
});
