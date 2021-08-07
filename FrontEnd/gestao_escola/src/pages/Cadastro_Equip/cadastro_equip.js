import axios from 'axios'
import { React, Component } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/cadastro_equip.css'

import school from '../../assets/img/school.png'
import Editar_Equip from '../Editar_Equip/editar_equip'
import Editar_Sala from '../Editar_Sala/editar_sala'


class Cadastro_Equip extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaEquipamento : [],
            marcaEquipamento : '',
            tipoEquipamento : '',
            numeroSerie : 0,
            numeroPatrimonio : 0,
            descricao : '',
            situacaoEquipamento : 0,
            mensagem : ''
        }
    }

    limpaCampo = () => {
        this.setState({marcaEquipamento : '', tipoEquipamento : '', numeroSerie : 0, numeroPatrimonio : 0, descricao : ''})
    }

    cadastrarEquipamento = (event) => {
        event.preventDefault()

        let equipamento = {
            marcaEquipamento : this.state.marcaEquipamento,
            tipoEquipamento : this.state.tipoEquipamento,
            numeroSerie : this.state.numeroSerie,
            numeroPatrimonio : this.state.numeroPatrimonio,
            descricaoEquipamento : this.state.descricao,
            statusEquipamento : parseInt( this.state.situacaoEquipamento )
        }

        axios.post('http://localhost:5000/api/equipamento', equipamento, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

        .then(resposta => {
            if (resposta.status === 201) {
                this.setState({mensagem : 'equipamento cadastrado com sucesso'})
                console.log('equipamento cadastrado')
            }
        })

        .catch(erro => {
            console.log(erro)
        })
    }

    atualizaState = (campo) => {
        this.setState({[campo.target.name] : campo.target.value})
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
                                <Link to="/ediE">Equipamentos</Link>
                                <p className="header-item">CADASTRE-SE</p>
                                <p className="header-item">SAIR</p>

                            </div>

                        </div>

                    </div>

                </header>


                <main>

                    <div className="equip-flex">
                        <p className="equip-titulo">CADASTRO DE EQUIPAMENTO</p>
                    </div>

                    <form onSubmit={this.cadastrarEquipamento}>

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
                    <div className="line"></div>

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
                    <div className="line"></div>

                    <div className="serie-flex">
                    <input 
                        className="serie-titulo"
                        type="number"
                        name="numeroSerie"
                        value={this.state.numeroSerie}
                        onChange={this.atualizaState}
                        placeholder="Número de série"
                        />
                    </div>
                    <div className="line"></div>

                    <div className="patrimonio-flex">
                    <input 
                        className="patrimonio-titulo"
                        type="number"
                        name="numeroPatrimonio"
                        value={this.state.numeroPatrimonio}
                        onChange={this.atualizaState}
                        placeholder="Número de patrimônio"
                        />
                    </div>
                    <div className="line"></div>

                    <div className="descricao-flex">
                    <input 
                        className="descricao-titulo"
                        type="text"
                        name="descricao"
                        value={this.state.descricao}
                        onChange={this.atualizaState}
                        placeholder="Descrição do equipamento"
                        />
                    </div>
                    <select
                        name="situacaoEquipamento"
                        value={this.state.situacaoEquipamento}
                        onChange={this.atualizaState}
                        >
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>

                    </select>
                    <div className="line"></div>

                    <div className="descricao-flex">

                    {/* <select 
                    className="descricao-titulo"
                    name="situacaoEquipamento"
                    value={this.state.situacaoEquipamento}
                    onChange={this.atualizaState}
                    placeholder="Descrição do equipamento"
                    >
                        <option value={true}>Ativo</option>
                        <option value={false}>Inativo</option>

                        {
                            this.state.listaEquipamento.map(situacao => {
                                return(
                                    <option key={situacao.statusEquipamento} value={situacao.statusEquipamento}>{situacao.situacaoEquipamento}</option>
                                )
                            })
                        }
                    </select> */}
                        
                    </div>
                    <div className="line"></div>


                    <div className="botao-cadastrar-box">
                        <button className="botao-cadastrar-titulo" type="submit">Cadastrar Equipamento</button>
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

export default Cadastro_Equip;
