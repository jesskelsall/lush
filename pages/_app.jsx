import Header from '../components/Header/Header'
import '../styles/global.scss'

const App = ({ Component, pageProps }) => {
  // Every time a page is loaded, the colour palette is random 🌈
  const randomHue = Math.floor(Math.random() * 360)

  // CSS variables are fun!
  return (
    <div id="app" style={{ '--hue': randomHue }}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
