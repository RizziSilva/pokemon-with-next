import { pokemonService } from 'app-services'
import { SinglePostPage } from 'app-pages'

export default function SinglePost({ pokemon }) {
  return <SinglePostPage pokemon={pokemon} />
}

export async function getStaticPaths() {
  const { getPokemonList } = pokemonService()
  const { data } = await getPokemonList()
  const allPokemonsName = data.results.map((pokemon) => pokemon.name)

  const pagesParams = allPokemonsName.map((name) => ({
    params: { name: `${name}` },
  }))

  return { paths: pagesParams, fallback: false }
}

export async function getStaticProps({ params }) {
  const { getPokemon } = pokemonService()
  const { name } = params
  const { data } = await getPokemon(name)

  return { props: { pokemon: { info: data, name: name } } }
}
