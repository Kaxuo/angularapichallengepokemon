import { Pokemon } from "./pokemon";

export interface Pokedex {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    id: string;
    name: string;
    url: string;
    pokemon: Pokemon;
  }>;
}
