describe("Pokemons List", () => {
  it("should be able to get a pokemon", () => {
    cy.intercept(
      "GET",
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807",
      { fixture: "pokemon.json" }
    ).as("getData");
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/1").as(
      "getSinglePokemon"
    );
    cy.visit("http://localhost:4200");
    cy.wait("@getData");
    cy.wait("@getSinglePokemon");
    cy.get(".data > .Name").contains("bulbasaur");
  });
});
