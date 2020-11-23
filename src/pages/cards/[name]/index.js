import Image from 'next/image'
import style from './style.module.scss'

export function SinglePostPage({ pokemon }) {
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
