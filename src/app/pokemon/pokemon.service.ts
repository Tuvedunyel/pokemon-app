import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon";

@Injectable()
export class PokemonService {

    getPokemonList (): Pokemon[] {
        return POKEMONS;
    }

    getPokemonById ( id: number ): Pokemon | undefined {
        return POKEMONS.find( pokemon => pokemon.id === id );
    }

    getPokemonTypeList (): string[] {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Vol',
            'Electrik',
            'Poison',
            'Fée',
            'Psy',
            'Combat'
        ];
    }
}
