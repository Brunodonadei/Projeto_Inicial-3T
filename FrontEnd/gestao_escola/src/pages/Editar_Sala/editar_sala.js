import { React, Component } from 'react'

import '../../assets/css/editar_sala.css'

import school from '../../assets/img/school.png'
import sala from '../../assets/img/classroom.png'
import axios from 'axios'


class Editar_Sala extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaSalas : [],
            idSalaEscolhida : 0,
            nomeSala : '',
            andarSala : 0,
            metragemSala : 0
        }
    }

    buscarSalas = () => {
        axios('http://localhost:5000/api/sala',{
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ listaSalas : resposta.data })
                console.log(this.state.listaSalas)
            }
        })

        .catch(erro => console.log(erro))
    }

    buscarSalaPorId = (sala) => {
        document.getElementById('pop-up').style.display = 'block'
        document.getElementById('overlay').style.display = 'block'

        this.setState({
            idSalaEscolhida : sala.idSala,
            nomeSala : sala.nomeSala,
            andarSala : sala.andarSala,
            metragemSala : sala.metragemSala
        }, () => {
            console.log('a sala ' + this.state.idSalaEscolhida + 'foi selecionada' )
        })
    }

    verModal = (salas) => {
        document.getElementById('modal').style.display = 'block'

        this.setState({
            idSalaEscolhida : salas.idSala,
            nomeSala : salas.nomeSala,
            andarSala : salas.andarSala,
            metragemSala : salas.metragemSala
        }, () => {
            console.log('a sala ' + this.state.idSalaEscolhida + 'foi selecionada' )
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
            nomeSala : this.state.nomeSala,
            andarSala : this.state.andarSala,
            metragemSala : this.state.metragemSala
        }

        if (this.state.idSalaEscolhida !== 0) {
            
            axios.put('http://localhost:5000/api/sala/' + this.state.idSalaEscolhida, sala, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
                }
            })

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('sala ' + this.state.idSalaEscolhida + ' atualizada')
                }
            })

            .catch(erro =>{
                console.log(erro)
            })

            .then(this.buscarSalas)
        }
    }

    excluirSala = (salas) => {

        this.setState({
            idSalaEscolhida : salas.idSala
        })

        axios.delete('http://localhost:5000/api/sala/' + salas.idSala, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
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
        this.setState({ [campo.target.name] : campo.target.value })
    }

    componentDidMount(){
        this.buscarSalas()
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

                    <div className="flex-salas">
                        <p className="title-salas">SALAS</p>
                    </div>


                    <tbody className="cards-flex">
                        {
                            this.state.listaSalas.map(evento => {
                                return(
                                    <tr className="editar-sala" key={evento.idSala}>

                                    <img className="img-sala" src={sala} alt="ícone de uma sala" />
                                    <td className="editar-sala-titulo">{evento.nomeSala}</td>
                                    <td className="editar-sala-titulo">{evento.andarSala}° Andar</td>
                                    <td className="editar-sala-titulo">{evento.metragemSala} m²</td>

                                    <button className="opcoes-editar" onClick={() => this.verModal(evento)}>Ver</button>
                                    <button className="opcoes-editar" onClick={() => this.buscarSalaPorId(evento)}>Editar</button>
                                    <button className="opcoes-editar" onClick={() => this.excluirSala(evento)}>Excluir</button>

                                    </tr>
                                )
                            })
                        }
                    </tbody>

                    <div id="modal" className="pop-up">
                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>
                        <div>
                            <p className="editar-sala-titulo">{this.state.nomeSala}</p>
                            <p className="editar-sala-titulo">{this.state.andarSala}° Andar</p>
                            <p className="editar-sala-titulo">{this.state.metragemSala}m²</p>
                        </div>
                    </div>
 
                    <div id="pop-up" className="pop-up">
                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>
                        {
                            <form onSubmit={this.editarSala}>
                                <input 
                                    className="nome-titulo"
                                    id="nome-titulo"
                                    type="text"
                                    name="nomeSala"
                                    value={this.state.nomeSala}
                                    onChange={this.atualizaState}
                                    placeholder="Nome da sala"
                                />
                                <input 
                                    className="andar-titulo"
                                    id="andar-titulo"
                                    type="number"
                                    name="andarSala"
                                    value={this.state.andarSala}
                                    onChange={this.atualizaState}
                                    placeholder="Andar da Sala"
                                />
                                <input 
                                    className="metragem-titulo"
                                    id="metragem-titulo"
                                    type="number"
                                    name="metragemSala"
                                    value={this.state.metragemSala}
                                    onChange={this.atualizaState}
                                    placeholder="Metragem da sala"
                                />

                                <button type="submit" onClick={this.fecharPopUp}>Alterar</button>

                            </form>
                        }
                    </div>
                    <div className="active" id="overlay"></div>
                        {/* <div className="editar-sala">

                            <img className="img-sala" src={sala} alt="ícone de uma sala" />
                            <p className="editar-sala-titulo">SALA X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>

                        <div className="editar-sala">

                            <img className="img-sala" src={sala} alt="ícone de uma sala" />
                            <p className="editar-sala-titulo">SALA X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>

                        <div className="editar-sala">

                            <img className="img-sala" src={sala} alt="ícone de uma sala" />
                            <p className="editar-sala-titulo">SALA X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div> */}

                    <p className="ver-mais">VER MAIS</p>

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

export default Editar_Sala;
