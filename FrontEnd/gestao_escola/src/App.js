import { React, Component } from 'react'
import { parseJwt, usuarioAutenticado } from './services/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import school from './assets/img/school3.png'
import school2 from './assets/img/school.png'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email : '',
      senha : '',
      erroMensagem : ''      
    }
  }

  fazerLogin = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/login', {
      email : this.state.email,
      senha : this.state.senha
    })

      .then(resposta => {
        if (resposta.status === 200) {
          localStorage.setItem('projeto-inicial', resposta.data.token)
          console.log(resposta.data.token)
  
          this.setState({ email: '', senha: '' })          
        }

        if (usuarioAutenticado !== null) {
          this.props.history.push('/home')
        }
      })

      .catch(() => {
        this.setState({ erroMensagem: "E-mail ou senha inválidos! Tente novamente." })
    })
  }

  popUp = () => {
    document.getElementById('slider').style.display = 'block'
  }

  atualizaState = (campo) => {
    this.setState({ [campo.target.name] : campo.target.value })
  }

  render() {

    return (

      <nav>
        <header className="header">
          <div className="gestao-alinhamento-img">
            <img className="school" src={school2} alt="ícone de uma escola"/>
            <p>Gestão<br/>Escola</p>
          </div>
          <nav>
            <ul className="menu">
              <li><Link to="/ediS" className="link">Salas</Link></li>
              <li><Link to="/ediE" className="link">Equipamentos</Link></li>
              <li onClick={() => this.popUp()}>Cadastro</li>
              <li onClick={() => this.deslogar()}>Sair</li>
              <li></li>
            </ul>
          </nav>
        </header>
        <div className="img-alinhamento">
          <img className="school" src={school2} alt="ícone de uma escola"/>
        </div>
        <h1>Login</h1>
          <form onSubmit={this.fazerLogin} className="login-box">
          <div className="email-flex">
            <input className="email-titulo" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.atualizaState} />        
            <input className="email-titulo" type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.atualizaState} />
            <button className="botao-entrar-titulo" type="submit">Entrar</button>
          </div>
        </form>
                <div id="slider">
                  <h1>O que você deseja cadastrar?</h1>
                  <Link to="/cadS">Sala</Link>
                  <Link to="/cadE">Equipamento</Link>                  
                </div>



      </nav>


    )

  }

}

export default Login;
