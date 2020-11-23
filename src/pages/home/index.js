import styles from './style.module.scss'

export function HomePage() {
  return (
    <div className={styles['container-message']}>
      <span className={styles['message']}>
        {`Esta aplicação foi criada baseada na API pública do `}
        <a target='_blank' className={styles['link']} href={'https://pokeapi.co/'}>
          pokemon
        </a>
        {`, ela tem como objetivo a passagem de conhecimento dos estudos sobre `}
        <a target='_blank' className={styles['link']} href={'https://nextjs.org/'}>
          Next.js
        </a>
        {` para o time interno do nosso projeto.`}
      </span>
    </div>
  )
}
