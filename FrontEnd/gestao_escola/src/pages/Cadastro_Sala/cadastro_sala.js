import { React, Component } from 'react'

import '../../assets/css/cadastro_sala.css'

import school from '../../assets/img/school.png'


class Cadastro_Sala extends Component {

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

                    <div className="sala-flex">
                        <p className="sala-titulo">CADASTRO DE SALA</p>
                    </div>

                    <div className="nome-flex">
                        <p className="nome-titulo">Nome</p>
                    </div>
                    <div className="line"></div>

                    <div className="andar-flex">
                        <p className="andar-titulo">Andar</p>
                    </div>
                    <div className="line"></div>

                    <div className="tamanho-flex">
                        <p className="tamanho-titulo">Tamanho (m²)</p>
                    </div>
                    <div className="line"></div>


                    <div className="botao-cadastrar-box">
                        <p className="botao-cadastrar-titulo">CADASTRAR SALA</p>
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

export default Cadastro_Sala;
