import Header from './header/Header'
import QuemSou from './quemSou/quemSou'
import TituloPort from './tituloPort/tituloPort'
import Portfolio from './portfolio/portfolio'
import Menu from './menu/menu'

export default function App() {
  return (
    <div className="App">
      <Menu/>
      <Header />
      <QuemSou />
      <TituloPort />
      <Portfolio />
    </div>
  );
}


