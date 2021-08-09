import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/editar_sala.css'
import school from '../../assets/img/school.png'
import sala from '../../assets/img/classroom.png'
import axios from 'axios'


class Editar_Sala extends Component {

    constructor(props) {

        super(props)

        this.state = {

            listaSalas: [],
            idSalaEscolhida: 0,
            nomeSala: '',
            andarSala: 0,
            metragemSala: 0,
            mensagemSucesso: ''

        }

    }


    buscarSalas = () => {
        axios('http://localhost:5000/api/sala', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaSalas: resposta.data })
                    console.log(this.state.listaSalas)
                }
            })

            .catch(erro => console.log(erro))
    }


    buscarSalaPorId = (sala) => {

        document.getElementById('pop-up').style.display = 'block'
        document.getElementById('overlay').style.display = 'block'

        this.setState({

            idSalaEscolhida: sala.idSala,
            nomeSala: sala.nomeSala,
            andarSala: sala.andarSala,
            metragemSala: sala.metragemSala

        }, () => {
            console.log('a sala ' + this.state.idSalaEscolhida + 'foi selecionada')
        })
    }



    verModal = (salas) => {

        document.getElementById('modal').style.display = 'block'

        this.setState({

            idSalaEscolhida: salas.idSala,
            nomeSala: salas.nomeSala,
            andarSala: salas.andarSala,
            metragemSala: salas.metragemSala

        }, () => {
            console.log('a sala ' + this.state.idSalaEscolhida + 'foi selecionada')
        })
    }



    fecharPopUp = () => {
        document.getElementById('pop-up').style.display = 'none'
        document.getElementById('overlay').style.display = 'none'
        document.getElementById('modal').style.display = 'none'
    }



    editarSala = (event) => {

        event.preventDefault()

        let sala = {
            nomeSala: this.state.nomeSala,
            andarSala: this.state.andarSala,
            metragemSala: this.state.metragemSala
        }

        if (this.state.idSalaEscolhida !== 0) {

            axios.put('http://localhost:5000/api/sala/' + this.state.idSalaEscolhida, sala, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
                }
            })

                .then(resposta => {

                    if (resposta.status === 204) {

                        this.setState({ mensagemSucesso: 'Sala alterada com sucesso!' })

                        this.abrirPopUpSucesso()

                    }

                })

                .catch(erro => {
                    console.log(erro)
                })

                .then(this.buscarSalas)
        }
    }


    excluirSala = (salas) => {

        this.setState({
            idSalaEscolhida: salas.idSala
        })

        axios.delete('http://localhost:5000/api/sala/' + salas.idSala, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('a sala ' + this.state.idSalaEscolhida + ' foi excluída')
                }
            })

            .catch(erro => {
                console.log(erro)
            })

            .then(this.buscarSalas)

    }


    atualizaState = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }


    deslogar = () => {
        localStorage.removeItem('projeto-inicial')
        this.props.history.push('/')
    }


    abrirPopUpSucesso = () => {

        document.getElementById('pop-msg-sucesso').style.display = 'block'

    }


    fecharPopUpSucesso = () => {

        document.getElementById('pop-msg-sucesso').style.display = 'none'

    }



    componentDidMount() {
        this.buscarSalas()
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

                    <div className="flex-salas">
                        <p className="title-salas">SALAS</p>
                    </div>


                    <div className="cards-flex-sala">
                        {
                            this.state.listaSalas.map(evento => {

                                return (

                                    <div className="editar-sala" key={evento.idSala}>

                                        <img className="img-sala" src={sala} alt="ícone de uma sala" />
                                        <td className="nome-sala-titulo">{evento.nomeSala}</td>

                                        <button className="opcoes-editar" onClick={() => this.verModal(evento)}>Ver</button>
                                        <button className="opcoes-editar" onClick={() => this.buscarSalaPorId(evento)}>Editar</button>
                                        <button className="opcoes-editar" onClick={() => this.excluirSala(evento)}>Excluir</button>


                                    </div>

                                )
                            })
                        }
                    </div>


                    {/* POP UP "VER" */}

                    <div id="modal" className="pop-up">

                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>

                        <div className="ver-info">
                            <p className="editar-sala-titulo">Nome da Sala: {this.state.nomeSala}</p>
                            <p className="editar-sala-titulo">Andar: {this.state.andarSala}°Andar</p>
                            <p className="editar-sala-titulo">Metragem: {this.state.metragemSala}m²</p>
                        </div>

                    </div>

                    {/* FIM POP UP "VER" */}



                    {/* POP UP "EDITAR" */}

                    <div id="pop-up" className="pop-up-editar">

                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>
                        {
                            <form onSubmit={this.editarSala}>


                                <div className="editar-flex">

                                    <p className="label-editar-sala">Novo Nome:</p>
                                    <input
                                        className="nome-titulo"
                                        id="nome-titulo"
                                        type="text"
                                        name="nomeSala"
                                        value={this.state.nomeSala}
                                        onChange={this.atualizaState}
                                        placeholder="Nome da sala"
                                    />

                                    <p className="label-editar-sala">Novo Andar:</p>
                                    <input
                                        className="andar-titulo"
                                        id="andar-titulo"
                                        type="number"
                                        min="1"
                                        max="99"
                                        name="andarSala"
                                        value={this.state.andarSala}
                                        onChange={this.atualizaState}
                                        placeholder="Andar da Sala"
                                    />

                                    <p className="label-editar-sala">Nova Metragem (m²):</p>
                                    <input
                                        className="metragem-titulo"
                                        id="metragem-titulo"
                                        type="number"
                                        min="1"
                                        name="metragemSala"
                                        value={this.state.metragemSala}
                                        onChange={this.atualizaState}
                                        placeholder="Metragem da sala"
                                    />

                                    <button className="botao-alterar-sala"
                                        type="submit"
                                        onClick={this.fecharPopUp}>
                                        Alterar
                                    </button>

                                </div>

                            </form>
                        }
                    </div>

                    {/* FIM POP UP "EDITAR" */}


                    {/* POP UP MENSAGEM DE SUCESSO */}
                    <div id="pop-msg-sucesso" className="pop-up">

                        <button className="modal-header" onClick={this.fecharPopUpSucesso}>&times;</button>

                        <div className="msg-sucesso-flex">
                            <p className="msg-sucesso">{this.state.mensagemSucesso}</p>
                        </div>

                    </div>
                    {/* FIM POP UP MENSAGEM DE SUCESSO */}


                    <div className="active" id="overlay"></div>

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

export default Editar_Sala;
