import { Header } from 'app-components'
import '../public/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='container-pages'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
