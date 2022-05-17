import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS
  pokemonSelected: Pokemon | undefined ;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon: Pokemon) {
    alert(`Vous avez sélectionné ${pokemon.name}`);
  }
}
