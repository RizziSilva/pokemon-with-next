import Image from 'next/image'
import { pokemonService } from 'app-services'
import style from './style.module.scss'

export default function SinglePost({ pokemon }) {
  const { info, name } = pokemon
  return (
    <div className={style['wrapper-post']}>
      <div className={style['container-post']}>
        <div className={style['post-header']}>
          <div className={style['container-title']}>
            <span className={style['title']}>{name}</span>
          </div>
          <div className={style['container-post-info']}>
            <span className={style['author']}>{info.types[0].type.name}</span>
            <span className={style['created-date']}>{}</span>
          </div>
        </div>
        <div className={style['container-description']}>
          <span className={style['description']}>
            {`O pokemon ${name} possui uma altura de ${info.height / 10}m, podendo chegar até 
            ${info.weight / 10}kg, possuindo um HP base de ${info.stats[0].base_stat} pontos.
            Possui um total de ${info.moves.length} movimentos e aparece em 
            ${info.game_indices.length} jogos da franquia.`}
          </span>
        </div>
        <div className={style['container-image']}>
          {Object.values(info.sprites).map((imageUrl, index) => {
            return typeof imageUrl === 'string' && <Image key={index} src={imageUrl} width={200} height={200} />
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // É usado dessa forma para que o next consiga geral as paginas em tempo de build e ter elas disponiveis para mostrar ao usuário
  // como uma página estática. Caso não seja possivel saber as paginas possiveis durante o build deve ser usado o getServerSideProps
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
