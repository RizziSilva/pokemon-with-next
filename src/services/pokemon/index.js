import { baseService } from '../instance'

export function pokemonService() {
  const { get } = baseService()

  async function getPokemonList() {
    return await get('/')
  }

  async function getPokemon(pokemonName) {
    return await get(`/${pokemonName}`)
  }

  return {
    getPokemonList,
    getPokemon,
  }
}
