import { React, Component } from 'react'

import '../../assets/css/editar_equip.css'

import school from '../../assets/img/school.png'
import pc from '../../assets/img/computer.png'


class Editar_Equip extends Component {

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

                    <div className="flex-equip">
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

export default Editar_Equip;
