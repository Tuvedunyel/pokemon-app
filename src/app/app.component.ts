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

  selectPokemon(event: HTMLInputElement) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === Number(event.value));
    if (pokemon) {
      this.pokemonSelected = pokemon;
    } else {
      console.log("Vous avez demandé un pokémon qui n'existe pas");
      this.pokemonSelected = pokemon;
    }
  }
}
