import { React, Component } from 'react'
import { parseJwt, usuarioAutenticado } from './services/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import school from './assets/img/school.png'


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

      <div>

        <header>

          <div className="header-box">

            <div className="logo-container">

              <img className="school" src={school} alt="ícone de uma escola" />

              <div className="titulo-container">

                <p className="titulo1">Gestão</p>
                <p className="titulo2">Escola</p>

              </div>

              <div className="header-menu">

                <p className="header-item">SOBRE</p>
                <Link to="/ediS" className="header-item">Salas</Link>
                <Link to="/ediE" className="header-item">Equipamentos</Link>
                <button onClick={() => this.popUp()}className="header-item">Cadastro</button>
                <p className="header-item">EQUIPAMENTOS</p>
                <div id="slider">
                  <h1>O que você deseja cadastrar?</h1>
                  <Link to="/cadS">Sala</Link>
                  <Link to="/cadE">Equipamento</Link>                  
                </div>
                <p className="header-item">SAIR</p>

              </div>

            </div>

          </div>

        </header>

        <main>

          <img className="logo-school" src={school} alt="ícone ilustrativo de uma escola" />

          <p className="logo-text1">GESTÃO</p>
          <p className="logo-text2">ESCOLA</p>

        <form onSubmit={this.fazerLogin} className="login-box">

          <div className="login-flex">
            <p className="login-titulo">LOGIN</p>
          </div>

          <div className="email-flex">

            <input className="email-titulo" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.atualizaState} />
        
            <input className="email-titulo" type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.atualizaState} />

            <button className="botao-entrar-titulo" type="submit">Entrar</button>
          </div>

        </form>

        </main>


      </div>


    )

  }

}

export default Login;
