import Image from 'next/image'
import Link from 'next/link'
import { HEADER_ROUTES } from 'app-constants'
import styles from './styles.module.scss'

export function Header() {
  function headerRoutes() {
    return HEADER_ROUTES.map((route, index) => {
      const { PATH, TITLE } = route

      return (
        <div className={styles['route']} key={index}>
          <Link href={{ pathname: PATH }}>
            <a>{TITLE}</a>
          </Link>
        </div>
      )
    })
  }

  return (
    <div className={styles['container-header']}>
      <div className={styles['container-logo']}>
        <Link href={{ pathname: '/' }}>
          <Image src='/images/logoPokemon.png' layout='fill' />
        </Link>
      </div>
      <div className={styles['container-routes']}>{headerRoutes()}</div>
    </div>
  )
}
