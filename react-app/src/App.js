import Header from './header/Header'
import QuemSou from './quemSou/quemSou'
import TituloLinhaTempo from './tituloLinhaTempo/tituloLinhaTempo'
import LinhaTempo from './linhaTempo/linhaTempo'
import Menu from './menu/menu'
import Contato from './contato/contato'

export default function App() {
  return (
    <div className="App">
      <Menu/>
      <Header />
      <QuemSou />
      <TituloLinhaTempo />
      <LinhaTempo />
      <Contato />
    </div>
  );
}


