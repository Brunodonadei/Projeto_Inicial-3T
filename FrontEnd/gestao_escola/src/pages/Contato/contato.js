import { React, Component } from 'react'

import '../../assets/css/contato.css'

import school from '../../assets/img/school.png'



class Contato extends Component {

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

                    <div className="contato-box">

                        <h1 className="contato-title">CONTATO</h1>

                        <div className="campo-whats">
                            <p className="whats-number">WHATSAPP: (11) 997993123</p>
                        </div>

                        <div className="campo-email">
                            <p className="email-text">EMAIL: gestão_escola@email.com</p>
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

export default Contato;
