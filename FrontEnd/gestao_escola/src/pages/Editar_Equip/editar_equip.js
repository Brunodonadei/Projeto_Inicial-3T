import { React, Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../assets/css/editar_equip.css'
import school from '../../assets/img/school.png'
import pc from '../../assets/img/computer.png'


class Editar_Equip extends Component {


    constructor(props) {

        super(props)

        this.state = {

            listaEquipamento: [],
            marca: '',
            tipo: '',
            numeroS: 0,
            numeroP: 0,
            descricao: '',
            situacao: 0,
            idEquipamentoEscolhido: 0,
            mensagemSucesso: ''

        }

    }


    buscarEquipamentoPorId = (equipamento) => {

        document.getElementById('pop-up').style.display = 'block'
        document.getElementById('overlay').style.display = 'block'

        this.setState({

            idEquipamentoEscolhido: equipamento.idEquipamento,
            marca: equipamento.marcaEquipamento,
            tipo: equipamento.tipoEquipamento,
            numeroS: equipamento.numeroSerie,
            numeroP: equipamento.numeroPatrimonio,
            descricao: equipamento.descricaoEquipamento,
            situacao: parseInt(equipamento.statusEquipamento)

        }, () => {
            console.log('o equipamento ' + this.state.idEquipamentoEscolhido + 'foi selecionado')
        })
    }


    verModal = (equipamento) => {

        document.getElementById('modal').style.display = 'block'

        this.setState({

            idEquipamentoEscolhido: equipamento.idEquipamento,
            marca: equipamento.marcaEquipamento,
            tipo: equipamento.tipoEquipamento,
            numeroS: equipamento.numeroSerie,
            numeroP: equipamento.numeroPatrimonio,
            descricao: equipamento.descricaoEquipamento,
            situacao: equipamento.statusEquipamento

        }, () => {
            console.log('o equipamento ' + this.state.idEquipamentoEscolhido + 'foi selecionado')
        })
    }


    deslogar = () => {
        localStorage.removeItem('projeto-inicial')
        this.props.history.push('/')
    }


    buscarEquipamentos = () => {

        axios('http://localhost:5000/api/equipamento', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

            .then(resposta => {

                if (resposta.status === 200) {

                    this.setState({ listaEquipamento: resposta.data })
                    console.log(this.state.listaEquipamento)

                }

            })

            .catch(erro => console.log(erro))
    }


    fecharPopUp = () => {
        document.getElementById('pop-up').style.display = 'none'
        document.getElementById('overlay').style.display = 'none'
        document.getElementById('modal').style.display = 'none'
    }


    editarEquipamento = (event) => {

        event.preventDefault()

        let equipamento = {

            marcaEquipamento: this.state.marca,
            tipoEquipamento: this.state.tipo,
            numeroSerie: this.state.numeroS,
            numeroPatrimonio: this.state.numeroP,
            descricaoEquipamento: this.state.descricao,
            statusEquipamento: parseInt(this.state.situacao)
        }

        if (this.state.idEquipamentoEscolhido !== 0) {

            axios.put('http://localhost:5000/api/equipamento/' + this.state.idEquipamentoEscolhido, equipamento, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
                }
            })

                .then(resposta => {

                    if (resposta.status === 204) {

                        this.setState({ mensagemSucesso: 'Equipamento alterado com sucesso!' })

                        this.abrirPopUpSucesso()

                    }

                })

                .catch(erro => {
                    console.log(erro)
                })

                .then(this.buscarEquipamentos)
        }
    }


    excluirEquipamento = (equipamento) => {

        this.setState({
            idEquipamentoEscolhido: equipamento.idEquipamento
        })

        axios.delete('http://localhost:5000/api/equipamento/' + equipamento.idEquipamento, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('o equipamento ' + this.state.idEquipamentoEscolhido + ' foi excluído')
                }
            })

            .catch(erro => {
                console.log(erro)
            })

            .then(this.buscarEquipamentos)

    }



    atualizaState = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value })

    }



    abrirPopUpSucesso = () => {

        document.getElementById('pop-msg-sucesso').style.display = 'block'

    }



    fecharPopUpSucesso = () => {

        document.getElementById('pop-msg-sucesso').style.display = 'none'

    }



    componentDidMount = () => {

        this.buscarEquipamentos()

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

                    <div className="flex-equips">
                        <p className="title-equips">EQUIPAMENTOS</p>
                    </div>


                    <div className="cards-flex-equipamento">

                        {
                            this.state.listaEquipamento.map(evento => {

                                return (

                                    <div className="editar-equipamento" key={evento.idEquipamento}>

                                        <img className="img-pc" src={pc} alt="ícone de um computador" />

                                        <td className="nome-equipamento-titulo">{evento.tipoEquipamento}</td>

                                        <button className="opcoes-editar-e" onClick={() => this.verModal(evento)}>Ver</button>
                                        <button className="opcoes-editar-e" onClick={() => this.buscarEquipamentoPorId(evento)}>Editar</button>
                                        <button className="opcoes-editar-e" onClick={() => this.excluirEquipamento(evento)}>Excluir</button>

                                    </div>

                                )
                            })
                        }

                    </div>


                    {/* POP UP "VER" */}

                    <div id="modal" className="pop-up">

                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>

                        <div className="ver-info">
                            <p className="editar-equipamento-titulo">Marca do Equipamento: {this.state.marca}</p>
                            <p className="editar-equipamento-titulo">Tipo de Equipamento: {this.state.tipo}</p>
                            <p className="editar-equipamento-titulo">Número de Série: {this.state.numeroS}</p>
                            <p className="editar-equipamento-titulo">Número de Patrimônio: {this.state.numeroP}</p>
                            <p className="editar-equipamento-titulo">Descrição: {this.state.descricao}</p>
                            <p className="editar-equipamento-titulo">Situação: {this.state.situacao ? 'Ativo' : 'Inativo'}</p>
                        </div>

                    </div>

                    {/* FIM POP UP "VER" */}



                    {/* POP UP "EDITAR" */}

                    <div id="pop-up" className="pop-up-editar">

                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>
                        {
                            <form onSubmit={this.editarEquipamento}>

                                <div className="editar-flex">

                                    <p className="label-editar">Nova Marca:</p>
                                    <input
                                        className="marca-equipamento"
                                        id="marca-equipamento"
                                        type="text"
                                        name="marca"
                                        value={this.state.marca}
                                        onChange={this.atualizaState}
                                        placeholder="Marca do Equipamento"
                                    />

                                    <p className="label-editar">Novo Tipo:</p>
                                    <input
                                        className="tipo-equipamento"
                                        id="tipo-equipamento"
                                        type="text"
                                        name="tipo"
                                        value={this.state.tipo}
                                        onChange={this.atualizaState}
                                        placeholder="Tipo de Equipamento"
                                    />

                                    <p className="label-editar">Novo Número de Série:</p>
                                    <input
                                        className="serie-equipamento"
                                        id="serie-equipamento"
                                        type="number"
                                        min="1"
                                        name="numeroS"  // name tem que ser igual o value!
                                        value={this.state.numeroS}
                                        onChange={this.atualizaState}
                                        placeholder="Número de Série"
                                    />

                                    <p className="label-editar">Novo Número de Patrimônio:</p>
                                    <input
                                        className="patrimonio-equipamento"
                                        id="patrimonio-equipamento"
                                        type="number"
                                        min="1"
                                        name="numeroP"
                                        value={this.state.numeroP}
                                        onChange={this.atualizaState}
                                        placeholder="Número de Patrimônio"
                                    />

                                    <p className="label-editar">Nova Descrição:</p>
                                    <input
                                        className="descricao-equipamento"
                                        id="descricao-equipamento"
                                        type="text"
                                        name="descricao"
                                        value={this.state.descricao}
                                        onChange={this.atualizaState}
                                        placeholder="Descrição"
                                    />


                                    <p className="label-editar">Nova Situação do Equipamento:</p>
                                    <select
                                        className="situacao-equipamento"
                                        name="situacao"
                                        value={this.state.situacao}
                                        onChange={this.atualizaState}
                                    >
                                        <option value="0">Inativo</option>
                                        <option value="1">Ativo</option>
                                    </select>



                                    <button className="botao-alterar"
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

export default Editar_Equip;
