import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, tap, of } from "rxjs";

@Injectable()
export class PokemonService {

    constructor (private http: HttpClient) {}

    getPokemonList (): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>('api/pokemons').pipe(
            tap( (pokemonList) => PokemonService.log(pokemonList) ),
            catchError( (error) => PokemonService.handleError(error, []))
        );
    }

    getPokemonById ( id: number ): Observable<Pokemon | undefined>{
        return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
            tap(  (pokemon) => PokemonService.log(pokemon)),
            catchError( (error) => PokemonService.handleError(error, undefined))
        )
    }

    updatePokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        }

        return this.http.put<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
            tap( (response) => PokemonService.log(response)),
            catchError( (error) => PokemonService.handleError(error, null))
        )
    }

    deletePokemonById(pokemonId: number): Observable<null> {
        return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
            tap( (response) => PokemonService.log(response)),
            catchError( (error) => PokemonService.handleError(error, null))
        )
    }

    addPokemon( pokemon: Pokemon ): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        }

        return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
            tap( (response) => PokemonService.log(response)),
            catchError( (error) => PokemonService.handleError(error, null))
        );
    }

    private static log( response: Pokemon[] | Pokemon | undefined | {} ) {
        console.table(response);
    }

    private static handleError( error: Error, errorValue: any ) {
        console.error(error)
        return of (errorValue)
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
