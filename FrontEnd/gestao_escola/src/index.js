import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import reportWebVitals from './reportWebVitals';
import './index.css';

import Home from './pages/Home/home';
import Cadastro_Equip from './pages/Cadastro_Equip/cadastro_equip'
import Cadastro_Sala from './pages/Cadastro_Sala/cadastro_sala'
import Editar_Equip from './pages/Editar_Equip/editar_equip';
import Editar_Sala from './pages/Editar_Sala/editar_sala'
import Sobre from './pages/Sobre/sobre'
import Contato from './pages/Contato/contato'
import Privacidade from './pages/Privacidade/privacidade'
import Localizacao from './pages/Localizacao/localizacao'
import App from './App';


const PermissaoUsuario = ({ component: Component }) => (
  <Route
    render={props =>
      usuarioAutenticado() && parseJwt().jti !== null ?
        <Redirect to="/" /> :
        <Component {...props} />
    }
  />
)

const routing = (
  <Router>

    <div>

      <Switch>
        <Route exact path="/" component={App} />
        <PermissaoUsuario path="/home" component={Home} />
        <PermissaoUsuario path="/cadE" component={Cadastro_Equip} />
        <PermissaoUsuario path="/cadS" component={Cadastro_Sala} />
        <PermissaoUsuario path="/ediE" component={Editar_Equip} />
        <PermissaoUsuario path="/ediS" component={Editar_Sala} />
        <PermissaoUsuario path="/sobre" component={Sobre} />
        <PermissaoUsuario path="/contato" component={Contato} />
        <PermissaoUsuario path="/privacidade" component={Privacidade} />
        <PermissaoUsuario path="/localizacao" component={Localizacao} />
      </Switch>

    </div>

  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();
