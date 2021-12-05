import Header from '../components/Header/Header'
import '../styles/global.scss'

const App = ({ Component, pageProps }) => {
  const randomHue = Math.floor(Math.random() * 360)

  return (
    <div id="app" style={{ '--hue': randomHue }}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
