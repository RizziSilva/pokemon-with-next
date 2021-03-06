import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from 'app-constants'
import style from './style.module.scss'

export function CardsPage({ pokemons }) {
  function renderPosts() {
    return pokemons.map((pokemon, index) => {
      return (
        <div className={style['container-post']} key={index}>
          <div className={style['container-title']}>
            <span className={style['title']}>{pokemon.name}</span>
          </div>
          <div className={style['container-image']}>
            <Image src={'/images/pokemon.jpg'} layout='fill' />
          </div>
          <div className={style['container-button']}>
            <Link href={{ pathname: ROUTES.CARD, query: { name: pokemon.name } }}>
              <button className={style['button']}>Ver Detalhes</button>
            </Link>
          </div>
        </div>
      )
    })
  }

  return <div className={style['container-posts']}>{renderPosts()}</div>
}
