import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class TuComponenteComponent {
  nombrePokemon: string = '';
  pokemonEncontrado: Pokemon | undefined;

  constructor(private pokemonService: PokemonService) { }

  /*getPokemonByName() {
    if (this.nombrePokemon.trim() !== '') {
      this.pokemonService.getPokemonByName(this.nombrePokemon.trim())
        .subscribe((pokemon: Pokemon) => {
          this.pokemonEncontrado = pokemon;
        }, (error: any) => {
          console.error('Error al buscar Pokémon:', error);
        });
    } else {
      this.pokemonEncontrado = undefined;
    }
  }*/
}
