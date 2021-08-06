import { React, Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../../assets/css/cadastro_sala.css'

import school from '../../assets/img/school.png'


class Cadastro_Sala extends Component {
    constructor(props){
        super(props)
        this.state = {
            nomeSala : '',
            andar : 0,
            metragem : 0,
            mensagemSucesso : ''
        }
    }

    cadastrarSala = (event) => {
        event.preventDefault()

        let sala = {
            nomeSala : this.state.nomeSala,
            andarSala : this.state.andar,
            metragemSala : this.state.metragem
        }
        
        axios.post('http://localhost:5000/api/sala', sala, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        }) 

        .then(resposta => {
            if (resposta.status === 201) {
                this.setState({ mensagemSucesso : 'sala cadastrada com sucesso', nomeSala : '', andar : 0, metragem : 0,  })

            }
        })

        .catch(erro =>{
            console.log(erro)
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
                                <Link to="/ediS">Salas</Link>
                                <p className="header-item">EQUIPAMENTOS</p>
                                <p className="header-item">CADASTRE-SE</p>
                                <p className="header-item">SAIR</p>

                            </div>

                        </div>

                    </div>

                </header>


                <main>

                    <div className="sala-flex">
                        <p className="sala-titulo">CADASTRO DE SALA</p>
                    </div>

                    <form onSubmit={this.cadastrarSala}>

                    <div className="nome-flex">
                        <input 
                        className="nome-titulo"
                        type="text"
                        name="nomeSala"
                        value={this.state.nomeSala}
                        onChange={this.atualizaState}
                        placeholder="Nome da sala"
                        />
                    </div>
                    <div className="line"></div>

                    <div className="andar-flex">
                    <input 
                        className="andar-titulo"
                        type="number"
                        name="andar"
                        value={this.state.andar}
                        onChange={this.atualizaState}
                        placeholder="Andar da sala"
                        />
                    </div>
                    <div className="line"></div>

                    <div className="tamanho-flex">
                    <input 
                        className="tamanho-titulo"
                        type="number"
                        name="metragem"
                        value={this.state.metragem}
                        onChange={this.atualizaState}
                        placeholder="Metragem"
                        />
                    </div>
                    <div className="line"></div>


                    <div className="botao-cadastrar-box">
                        <button 
                        className="botao-cadastrar-titulo"
                        type="submit"
                        >CADASTRAR SALA</button>
                    </div>
                    <div className="texto">
                        <p style={{ color : 'blue' }}>{this.state.mensagemSucesso}</p>
                    </div>

                    </form>

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

export default Cadastro_Sala;
