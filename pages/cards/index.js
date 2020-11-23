import { pokemonService } from 'app-services'
import { CardsPage } from 'app-pages'

export default function Cards({ pokemons }) {
  return <CardsPage pokemons={pokemons} />
}

export async function getServerSideProps() {
  const { getPokemonList } = pokemonService()
  const { data } = await getPokemonList()

  return { props: { pokemons: data.results } }
}
