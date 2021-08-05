import { React, Component } from 'react'

import '../../assets/css/sobre.css'

import school from '../../assets/img/school.png'



class Sobre extends Component {

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

                    <p className="sobre-titulo">SOBRE</p>

                    <div className="sobre-box">

                        <p className="sobre-text">A plataforma Gestão Escola é um sistema de gerenciamento de patrimônio de instituições educacionais, destinado principalmente para os admnistradores de escolas e unidades de ensino em geral. Nossa plataforma web possibilita o cadastro e o gerenciamento de salas e equipamentos, assim como a atualização dos dados dos ativos escolares e relatórios internos/externos de entrada e saída de patrimônio das instituições educacionais cadastradas na plataforma.</p>

                    </div>


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

export default Sobre;
