import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';

function App() {

  return (
      <Router>
          <Cabecalho>
              
          </Cabecalho>
          <switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/Sobre'>
                <Sobre />
            </Route>
            <Route path='/Pagina404'>
                <Pagina404/>
            </Route>
          </switch>
      </Router>
  )
}

export default App;
