import { React, Component } from 'react'

import '../../assets/css/privacidade.css'

import school from '../../assets/img/school.png'



class Privacidade extends Component {

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

                    <div className="privacidade-box">

                        <h1 className="privacidade-title">PRIVACIDADE</h1>

                        <p className="privacidade-text">Por força da Lei nº 13.709/18, a Lei Geral de Proteção de Dados ou LGPD, o uso de todos os dados pessoais e dados pessoais sensíveis inseridos nesta plataforma serão tratados somente pelos responsáveis, e com acesso restrito a qualquer outro colaborador Gestão Escola. A finalidade única da captura e armazenamento desses dados é a de gestão de patrimônios escolares. Não há compartilhamento com terceiros e todos os dados considerados desnecessários serão excluídos.</p>

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

export default Privacidade;
