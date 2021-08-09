import { React, Component } from 'react'
import { usuarioAutenticado } from './services/auth'
import axios from 'axios'
import './App.css'
import school from './assets/img/school.png'


class Login extends Component {

  constructor(props) {

    super(props)

    this.state = {
      email: '',
      senha: '',
      erroMensagem: ''
    }

  }


  fazerLogin = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/login', {
      email: this.state.email,
      senha: this.state.senha
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


  deslogar = () => {
    localStorage.removeItem('projeto-inicial')
    this.props.history.push('/')
  }


  atualizaState = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value })
  }



  render() {

    return (

      <div>


        <main>

          <img className="logo-school" src={school} alt="ícone ilustrativo de uma escola" />

          <p className="logo-text-login">Gerencie seu patrimônio escolar com a plataforma Gestão Escola</p>

          <form onSubmit={this.fazerLogin} className="login-box">

            <div className="login-flex">
              <p className="login-titulo">LOGIN</p>
            </div>

            <div className="email-flex">

              <input className="email-titulo" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.atualizaState} />

              <input className="email-titulo" type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.atualizaState} />


              <div className="botao-entrar-box">
                <button className="botao-entrar" type="submit">Entrar</button>
              </div>

            </div>

          </form>

        </main>




      </div>


    )

  }

}

export default Login;
