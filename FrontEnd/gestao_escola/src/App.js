import { React, Component } from 'react'
import { parseJwt } from './services/auth'
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

        if (parseJwt().jti !== null) {
          this.props.history.push('/home')
        }
      })

      .catch(() => {
        this.setState({ erroMensagem: "E-mail ou senha inválidos! Tente novamente." })
    })
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

                <p className="titulo1">GESTÃO</p>
                <p className="titulo2">ESCOLA</p>

              </div>

              <div className="header-menu">

                <p className="header-item">SOBRE</p>
                <p className="header-item">SALAS</p>
                <p className="header-item">EQUIPAMENTOS</p>
                <p className="header-item">CADASTRE-SE</p>
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
            <input className="email-titulo" type="text" placeholder="email" name="email" value={this.state.email} onChange={this.atualizaState} />
          </div>
          <div className="line"></div>

          <div className="senha-flex">
          <input className="senha-titulo" type="password" placeholder="senha" name="senha" value={this.state.senha} onChange={this.atualizaState} />
          </div>
          <div className="line"></div>


          <div className="botao-entrar-box">
            <button className="botao-entrar-titulo" type="submit">Entrar</button>
          </div>

        </form>

          {/* <div className="cadastro">
            <p className="cadastre-se1">Não Possui uma conta?</p>
            <p className="cadastre-se2">Cadastre-se</p>
          </div> */}

        </main>


        <footer>

          <div className="footer-box">

            <div className="footer-content">

              <p className="footer-itemX">@2021 - Gestão Escola. Todos os direitos reservados.</p>
              <p className="footer-item">CONTATO</p>
              <p className="footer-item">LOCALIZAÇÃO</p>
              <p className="footer-item">PRIVACIDADE</p>

            </div>

          </div>

        </footer>



      </div>

    )

  }

}

export default Login;
