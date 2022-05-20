import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Éditer {{ pokemon?.name }}</h2>
    <p class="center" *ngIf="pokemon">
      <img [src]="pokemon.picture" [alt]="pokemon.name">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) { }

  ngOnInit(){
    const pokemonId: number | null = Number(this.route.snapshot.paramMap.get('id'));
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe( pokemon => this.pokemon = pokemon );
    } else {
      this.pokemon = undefined;
    }
  }

}
