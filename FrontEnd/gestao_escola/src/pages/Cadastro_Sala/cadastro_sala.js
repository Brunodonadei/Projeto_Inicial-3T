import { React, Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../assets/css/cadastro_sala.css'
import school from '../../assets/img/school.png'


class Cadastro_Sala extends Component {

    constructor(props) {

        super(props)

        this.state = {
            nomeSala: '',
            andar: 0,
            metragem: 0,
            mensagemSucesso: ''
        }
    }


    cadastrarSala = (event) => {

        event.preventDefault()

        let sala = {
            nomeSala: this.state.nomeSala,
            andarSala: this.state.andar,
            metragemSala: this.state.metragem
        }

        axios.post('http://localhost:5000/api/sala', sala, {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

            .then(resposta => {

                if (resposta.status === 201) {

                    this.setState({ mensagemSucesso: 'Sala cadastrada com sucesso!', nomeSala: '', andar: 0, metragem: 0, })
                    this.abrirPopUp()
                }


            })

            .catch(erro => {
                console.log(erro)
            })
    }


    atualizaState = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }


    deslogar = () => {
        localStorage.removeItem('projeto-inicial')
        this.props.history.push('/')
    }


    abrirPopUp = () => {

        document.getElementById('pop-msg-sucesso').style.display = 'block'

    }


    fecharPopUp = () => {

        document.getElementById('pop-msg-sucesso').style.display = 'none'

    }



    render() {

        return (

            <div>

                <header>

                    <div className="header-box">

                        <div className="logo-container">

                            <Link to="/home">
                                <img className="school" src={school} alt="ícone de uma escola" />
                            </Link>

                            <div className="titulo-container">

                                <p className="titulo1">Gestão</p>
                                <p className="titulo2">Escola</p>

                            </div>

                            <div className="header-menu">

                                <Link to="/sobre" className="header-item">SOBRE</Link>
                                <Link to="/ediS" className="header-item">SALAS</Link>
                                <Link to="/ediE" className="header-item">EQUIPAMENTOS</Link>
                                <button className="botao-sair" onClick={() => this.deslogar()}>SAIR</button>

                            </div>

                        </div>

                    </div>

                </header>


                <main>

                    <div className="sala-flex">
                        <p className="sala-titulo">CADASTRO DE SALA</p>
                    </div>

                    <form onSubmit={this.cadastrarSala}>

                        <p className="labels">Nome da Sala:</p>
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

                        <p className="labels">Andar da Sala:</p>
                        <div className="andar-flex">
                            <input
                                className="andar-titulo"
                                type="number"
                                name="andar"
                                min="1"
                                max="99"
                                value={this.state.andar}
                                onChange={this.atualizaState}
                                placeholder="Andar da sala"
                            />
                        </div>

                        <p className="labels">Metragem da Sala (m²):</p>
                        <div className="tamanho-flex">
                            <input
                                className="tamanho-titulo"
                                type="number"
                                name="metragem"
                                min="1"
                                value={this.state.metragem}
                                onChange={this.atualizaState}
                                placeholder="Metragem da Sala (m²)"
                            />
                        </div>


                        <div className="botao-flex">
                            <button
                                className="cadastrar-titulo"
                                type="submit"
                            >
                                CADASTRAR SALA
                            </button>
                        </div>

                        {/* POP UP MENSAGEM DE SUCESSO */}
                        <div id="pop-msg-sucesso" className="pop-up">

                            <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>

                            <div className="msg-sucesso-flex">
                                <p className="msg-sucesso">{this.state.mensagemSucesso}</p>
                            </div>

                        </div>

                    </form>

                </main>


                <footer>

                    <div className="footer-box">

                        <div className="footer-content">

                            <p className="footer-reservado">@2021 - Gestão Escola. Todos os direitos reservados.</p>
                            <Link to="/contato" className="footer-item">CONTATO</Link>
                            <Link to="/localizacao" className="footer-item">LOCALIZAÇÃO</Link>
                            <Link to="/privacidade" className="footer-item">PRIVACIDADE</Link>

                        </div>

                    </div>

                </footer>



            </div>

        )

    }

}

export default Cadastro_Sala;
