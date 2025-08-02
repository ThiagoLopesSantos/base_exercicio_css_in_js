import EstiloGlobal, { Container } from './style'
import { ThemeProvider } from 'styled-components'
import StandardTheme from './themes/standard'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <ThemeProvider theme={StandardTheme}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
