import { Injectable } from '@angular/core';
import { Data, Resultado } from '../interfaces/pokeApi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})

/*export class Pokemon {
  id: number;
  name: string;
  imagen?: string;

  constructor(id: number, name: string, imagen?: string) {
    this.id = id;
    this.name = name;
    this.imagen = imagen;
  }
}*/


export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2'

  constructor() { }

  /*async getPokemonByName(nombrePokemon: string): Promise<Pokemon> {
    const res = await fetch(`${this.apiUrl}pokemon/${nombrePokemon}`);
    if (!res.ok) {
      throw new Error('Pokemon not found');
    }
    const pokemonData = await res.json();
    return this.mapPokemon(pokemonData);
  }

  private mapPokemon(data: any): Pokemon{
    return{
      id: data.id,
      name: data.name,
      imagen: `${this.apiUrl}${data.sprites.other.dream_world.front_default}`,
      tipo1: data.types[0].type.name,
      tipo2: data.types.length > 1 ? data.types[1].type.name : '',
      hp: data.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === 'hp').base_stat,
      ataque: data.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === 'attack').base_stat,
      defensa: data.stats.find((stat: { stat: { name: string; }; }) => stat.stat.name === 'defense').base_stat
    }
  }*/

  async getByPage(page: number, size: number = 40): Promise<Resultado[]> {
    const offset = (page - 1) * size;
    if (offset > 900) return [];
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
    const resJson = await res.json();
    return resJson.results;
  }

  async getById(id: string | number): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
  }

  async getDescripcion(id: string | number): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto: any) => texto.language.name === "en");
    return texto ? texto.flavor_text : "No se encontró descripción en español";
  }
}
