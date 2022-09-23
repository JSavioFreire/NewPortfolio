import Header from './header/Header'
import QuemSou from './quemSou/quemSou'
import TituloLinhaTempo from './tituloLinhaTempo/tituloLinhaTempo'
import LinhaTempo from './linhaTempo/linhaTempo'
import Menu from './menu/menu'

export default function App() {
  return (
    <div className="App">
      <Menu/>
      <Header />
      <QuemSou />
      <TituloLinhaTempo />
      <LinhaTempo />
    </div>
  );
}


