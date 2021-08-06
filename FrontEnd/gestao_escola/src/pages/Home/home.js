import { React, Component } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/home.css'

import school from '../../assets/img/school.png'
import sala from '../../assets/img/classroom.png'
import pc from '../../assets/img/computer.png'


class Home extends Component {

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

                    <div className="gerencie-flex">
                        <p className="gerencie-titulo">GERENCIE O PATRIMÔNIO DE SUA ESCOLA COM A PLATAFORMA GESTÃO ESCOLA</p>
                    </div>

                    <div className="cards-flex">

                        <div className="cadastro-sala">
                            <Link to="/cadS">
                                <img className="img-sala" src={sala} alt="ícone de uma sala" />
                                <p className="cadastro-sala-titulo">CADASTRE UMA SALA</p>
                            </Link>
                        </div>

                        <div className="cadastro-equip">
                            <Link to="/cadE">
                                <img className="img-equip" src={pc} alt="ícone de um computador" />
                                <p className="cadastro-equip-titulo">CADASTRE UM EQUIPAMENTO</p>
                            </Link>
                        </div>

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

export default Home;
