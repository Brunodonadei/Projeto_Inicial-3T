import { React, Component } from 'react'

import './App.css'

import school from './assets/img/school.png'


class Login extends Component {

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

          <div className="login-flex">
            <p className="login-titulo">LOGIN</p>
          </div>

          <div className="email-flex">
            <p className="email-titulo">Digite seu Email</p>
          </div>
          <div className="line"></div>

          <div className="senha-flex">
            <p className="senha-titulo">Digite sua Senha</p>
          </div>
          <div className="line"></div>


          <div className="botao-entrar-box">
            <p className="botao-entrar-titulo">ENTRAR</p>
          </div>

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
