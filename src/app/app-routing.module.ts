import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuessingPageComponent } from "./components/guessing-page/guessing-page.component";
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { EidComponent } from "./components/eid/eid.component";

const routes: Routes = [
  { path: "", component: PokemonsComponent },
  { path: "game", component: GuessingPageComponent },
  { path: "eID", component: EidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
