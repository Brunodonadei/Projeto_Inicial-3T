import { React, Component } from 'react'
import axios from 'axios'

import '../../assets/css/editar_equip.css'

import school from '../../assets/img/school.png'
import pc from '../../assets/img/computer.png'


class Editar_Equip extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaEquipamento : [],
            marcaEquipamento : '',
            tipoEquipamento : '',
            numeroSerie : 0,
            numeroPatrimonio : 0,
            descricaoEquipamento : '',
            statusEquipamento : 0,
            idEquipamentoEscolhido : 0,
        }
    }

    deslogar = () => {
        localStorage.removeItem('projeto-inicial')
        this.props.history.push('/')
    }

    buscarEquipamentos = () => {
        axios('http://localhost:5000/api/equipamento', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ listaEquipamento : resposta.data })
                console.log(this.state.listaEquipamento)
            }
        })

        .catch(erro => console.log(erro))
    }

    abrirPopUp = (equipamento) => {
        document.getElementById('pop-up').style.display = 'block'
        // document.getElementById('overlay').style.display = 'block'

        this.setState({
            idEquipamentoEscolhido : equipamento.idEquipamento,
            marcaEquipamento : equipamento.marcaEquipamento,
            tipoEquipamento : equipamento.tipoEquipamento,
            numeroSerie : equipamento.numeroSerie,
            numeroPatrimonio : equipamento.numeroPatrimonio,
            descricaoEquipamento : equipamento.descricaoEquipamento,
            
        }, () => {
            console.log('a sala ' + this.state.idEquipamentoEscolhido + 'foi selecionada' )
        })
    }

    editarEquipamento = (event) => {
        event.preventDefault()

        let equipamento = {

            marcaEquipamento : this.state.marcaEquipamento,
            tipoEquipamento : this.state.tipoEquipamento,
            numeroSerie : this.state.numeroSerie,
            numeroPatrimonio : this.state.numeroPatrimonio,
            descricaoEquipamento : this.state.descricaoEquipamento,
            statusEquipamento :  parseInt(this.state.statusEquipamento)
        }

        if (this.state.idEquipamentoEscolhido !== 0) {
            
            axios.put('http://localhost:5000/api/equipamento/' + this.state.idEquipamentoEscolhido, equipamento, {
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
                }
            })

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('sala ' + this.state.idEquipamentoEscolhido + ' atualizada')
                }
            })

            .catch(erro =>{
                console.log(erro)
            })

            .then(this.buscarEquipamentos)
        }
    }

    excluirEquipamento = (equipamento) => {

        this.setState({
            idEquipamentoEscolhido : equipamento.idEquipamento
        })

        axios.delete('http://localhost:5000/api/equipamento/' + equipamento.idEquipamento, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
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
        this.setState({ [campo.target.name] : campo.target.value })
    }

    componentDidMount = () =>{
        this.buscarEquipamentos()
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
                                <button className="header-item" onClick={() => this.deslogar()}>Sair</button>

                            </div>

                        </div>

                    </div>

                </header>


                <section>
                    <div>
                        <table style={{borderCollapse : 'separate', borderSpacing : 30, align : 'center'}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Marca</th>
                                    <th>Tipo</th>
                                    <th>Série</th>
                                    <th>Patrimonio</th>
                                    <th>Descrição</th>
                                    <th>Situação</th>
                            
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    this.state.listaEquipamento.map(evento => {
                                        return(
                                            <tr key={evento.idEquipamento}>
                                                <td>{evento.idEquipamento}</td>
                                                <td>{evento.marcaEquipamento}</td>
                                                <td>{evento.tipoEquipamento}</td>
                                                <td>{evento.numeroSerie}</td>
                                                <td>{evento.numeroPatrimonio}</td>
                                                <td>{evento.descricaoEquipamento}</td>
                                                <td>{evento.statusEquipamento ? 'Ativo' : 'Inativo'}</td>
                                                <button onClick={() => this.abrirPopUp(evento)}>Editar</button>
                                                <button onClick={() => this.excluirEquipamento(evento)}>Excluir</button>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div id="pop-up" className="pop-up">
                        <button className="modal-header">&times;</button>
                        {
                            <form onSubmit={this.editarEquipamento}>
                                <input 
                                    className="marca-titulo"
                                    id="marca-titulo"
                                    type="text"
                                    name="marcaEquipamento"
                                    value={this.state.marcaEquipamento}
                                    onChange={this.atualizaState}
                                    placeholder="Marca Equipamento"
                                />
                                <input 
                                    className="tipo-titulo"
                                    id="tipo-titulo"
                                    type="text"
                                    name="tipoEquipamento"
                                    value={this.state.tipoEquipamento}
                                    onChange={this.atualizaState}
                                    placeholder="Tipo Equipamento"
                                />
                                <input 
                                    className="numero-titulo"
                                    id="numero-titulo"
                                    type="number"
                                    name="numeroSerie"
                                    value={this.state.numeroSerie}
                                    onChange={this.atualizaState}
                                    placeholder="Número Série"
                                />
                                <input 
                                    className="numero-titulo"
                                    id="numero-titulo"
                                    type="number"
                                    name="numeroPatrimonio"
                                    value={this.state.numeroPatrimonio}
                                    onChange={this.atualizaState}
                                    placeholder="Número Patrimônio"
                                />
                                <input 
                                    className="descricao-titulo"
                                    id="descricao-titulo"
                                    type="text"
                                    name="descricaoEquipamento"
                                    value={this.state.descricaoEquipamento}
                                    onChange={this.atualizaState}
                                    placeholder="Descrição"
                                />
                                <select
                                    name="statusEquipamento"
                                    value={this.state.statusEquipamento}
                                    onChange={this.atualizaState}
                                >
                                    <option value="1">Ativo</option>
                                    <option value="0">Inativo</option>

                                </select>

                                <button type="submit">Alterar</button>

                            </form>
                        }
                    </div>
                    
                </section>

                    {/* <div className="flex-equip">
                        <p className="title-equip">EQUIPAMENTOS</p>
                    </div>

                    <div className="cards-flex">

                        <div className="editar-equip">

                            <img className="img-equip" src={pc} alt="ícone de um computador" />
                            <p className="editar-equip-titulo">EQUIPAMENTO X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>

                        <div className="editar-equip">

                            <img className="img-equip" src={pc} alt="ícone de um computador" />
                            <p className="editar-equip-titulo">EQUIPAMENTO X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>

                        <div className="editar-equip">

                            <img className="img-equip" src={pc} alt="ícone de um computador" />
                            <p className="editar-equip-titulo">EQUIPAMENTO X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>


                    </div>

                    <p className="ver-mais">VER MAIS</p> */}

                


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

export default Editar_Equip;
