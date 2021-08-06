import { React, Component } from 'react'
import axios from 'axios'

import '../../assets/css/editar_equip.css'

import school from '../../assets/img/school.png'
import pc from '../../assets/img/computer.png'


class Editar_Equip extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaEquipamento : []
        }
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
                                <p className="header-item">SAIR</p>

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
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
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
