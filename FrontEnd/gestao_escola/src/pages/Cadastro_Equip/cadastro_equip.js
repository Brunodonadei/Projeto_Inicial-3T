import axios from 'axios'
import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/cadastro_equip.css'
import school from '../../assets/img/school.png'



class Cadastro_Equip extends Component {

    constructor(props) {

        super(props)

        this.state = {
            listaEquipamento: [],
            marcaEquipamento: '',
            tipoEquipamento: '',
            numeroSerie: 0,
            numeroPatrimonio: 0,
            descricao: '',
            situacaoEquipamento: 0,
            mensagemSucesso: ''
        }

    }


    limpaCampo = () => {
        this.setState({ marcaEquipamento: '', tipoEquipamento: '', numeroSerie: 0, numeroPatrimonio: 0, descricao: '' })
    }


    cadastrarEquipamento = (event) => {

        event.preventDefault()

        let equipamento = {
            marcaEquipamento: this.state.marcaEquipamento,
            tipoEquipamento: this.state.tipoEquipamento,
            numeroSerie: this.state.numeroSerie,
            numeroPatrimonio: this.state.numeroPatrimonio,
            descricaoEquipamento: this.state.descricao,
            statusEquipamento: parseInt(this.state.situacaoEquipamento)
        }

        axios.post('http://localhost:5000/api/equipamento', equipamento, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

            .then(resposta => {

                if (resposta.status === 201) {

                    this.setState({
                        mensagemSucesso: 'Equipamento cadastrado com sucesso!',
                        marcaEquipamento: '',
                        tipoEquipamento: '',
                        numeroSerie: 0,
                        numeroPatrimonio: 0,
                        descricao: '',
                        situacaoEquipamento: 0
                    })

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

                    <div className="equip-flex">
                        <p className="equip-titulo">CADASTRO DE EQUIPAMENTO</p>
                    </div>

                    <form onSubmit={this.cadastrarEquipamento}>

                        <p className="labels">Marca do Equipamento:</p>
                        <div className="marca-flex">
                            <input
                                className="marca-titulo"
                                type="text"
                                name="marcaEquipamento"
                                value={this.state.marcaEquipamento}
                                onChange={this.atualizaState}
                                placeholder="Marca do equipamento"
                            />
                        </div>

                        <p className="labels">Tipo de Equipamento:</p>
                        <div className="tipo-flex">
                            <input
                                className="tipo-titulo"
                                type="text"
                                name="tipoEquipamento"
                                value={this.state.tipoEquipamento}
                                onChange={this.atualizaState}
                                placeholder="Tipo de equipamento"
                            />
                        </div>

                        <p className="labels">Número de Série do Equipamento:</p>
                        <div className="serie-flex">
                            <input
                                className="serie-titulo"
                                type="number"
                                name="numeroSerie"
                                min="1"
                                value={this.state.numeroSerie}
                                onChange={this.atualizaState}
                                placeholder="Número de série"
                            />
                        </div>

                        <p className="labels">Número de Patrimônio do Equipamento:</p>
                        <div className="patrimonio-flex">
                            <input
                                className="patrimonio-titulo"
                                type="number"
                                name="numeroPatrimonio"
                                min="1"
                                value={this.state.numeroPatrimonio}
                                onChange={this.atualizaState}
                                placeholder="Número de patrimônio"
                            />
                        </div>

                        <p className="labels">Descrição do Equipamento:</p>
                        <div className="descricao-flex">
                            <input
                                className="descricao-titulo"
                                type="text"
                                name="descricao"
                                value={this.state.descricao}
                                onChange={this.atualizaState}
                                placeholder="Descrição"
                            />
                        </div>


                        <p className="labels">Situação do Equipamento:</p>
                        <select
                            className="select-status"
                            name="situacaoEquipamento"
                            value={this.state.situacaoEquipamento}
                            onChange={this.atualizaState}
                        >
                            <option value="0">Inativo</option>
                            <option value="1">Ativo</option>

                        </select>


                        <div className="descricao-flex"></div>

                        <div className="botao-flex">

                            <button className="botao-cadastrar-equipamento"
                                type="submit"
                            >
                                Cadastrar Equipamento
                            </button>

                        </div>


                        {/* POP UP MENSAGEM DE SUCESSO */}
                        <div id="pop-msg-sucesso" className="pop-up">

                            <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>

                            <div className="msg-sucesso-flex">
                                <p className="msg-sucesso">{this.state.mensagemSucesso}</p>
                            </div>

                        </div>
                        {/* FIM POP UP MENSAGEM DE SUCESSO */}


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

export default Cadastro_Equip;
