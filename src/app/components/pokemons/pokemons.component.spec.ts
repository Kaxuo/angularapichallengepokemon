import { of } from "rxjs";
import { PokemonsComponent } from "./pokemons.component";

describe("PokemonComponent", () => {
  let component: PokemonsComponent;
  const pokServiceMock = {
    getPokemons: jest.fn(),
  };
  beforeEach(() => {
    component = new PokemonsComponent(pokServiceMock as any);
    pokServiceMock.getPokemons.mockImplementationOnce(() => of({}));
  });

  describe("Setup Component", () => {
    describe("ngOnInit", () => {
      it("should call the get pokemon on init", () => {
        const pokServiceSpy = spyOn(
          pokServiceMock,
          "getPokemons"
        ).and.callThrough();
        expect(pokServiceSpy).not.toHaveBeenCalled();
        component.ngOnInit();
        expect(pokServiceSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe("Simple function", () => {
    it("Sum Function should additional", () => {
      expect(component.sum(40, 60)).toBe(100);
    });

    // Could be stored in a different address
    it("Should create user", () => {
      expect(component.createUser()).toEqual({
        firstName: "Nguyen",
        lastName: "Hoang",
      });
    });

    it("there is no I in team", () => {
      expect("team").not.toMatch(/I/i);
    });

    it("Admin should be in usernames", () => {
      const usernames = ["John", "Karen", "Bob"];
      expect(usernames).toContain("Bob");
    });
  });
});
