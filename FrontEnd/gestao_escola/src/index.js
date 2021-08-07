import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import reportWebVitals from './reportWebVitals';
import './index.css';

import Cadastro_Equip from './pages/Cadastro_Equip/cadastro_equip'
import Cadastro_Sala from './pages/Cadastro_Sala/cadastro_sala'
import Editar_Equip from './pages/Editar_Equip/editar_equip';
import Home from './pages/Home/home';
import Editar_Sala from './pages/Editar_Sala/editar_sala'
import App from './App';

const PermissaoUsuario = ({ component : Component }) => (
  <Route 
    render = { props => 
      usuarioAutenticado() && parseJwt().jti !== null ?
      <Redirect to = "/" /> :
      <Component {...props} /> 
    }
  />
)

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <PermissaoUsuario path="/home" component={Home}/>
        <PermissaoUsuario path="/cadE" component={Cadastro_Equip}/>
        <PermissaoUsuario path="/cadS" component={Cadastro_Sala}/>
        <PermissaoUsuario path="/ediE" component={Editar_Equip}/>
        <PermissaoUsuario path="/ediS" component={Editar_Sala}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
