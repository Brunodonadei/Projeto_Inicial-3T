import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/sobre.css'
import school from '../../assets/img/school.png'



class Sobre extends Component {


    deslogar = () => {
        localStorage.removeItem('projeto-inicial')
        this.props.history.push('/')
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

                    <p className="sobre-titulo">SOBRE - GESTÃO ESCOLA</p>

                    <div className="sobre-box">

                        <p className="sobre-text">A plataforma Gestão Escola é um sistema de gerenciamento de patrimônio de instituições educacionais, destinado principalmente para os admnistradores de escolas e unidades de ensino em geral. Nossa plataforma web possibilita o cadastro e o gerenciamento de salas e equipamentos, assim como a atualização dos dados dos ativos escolares e relatórios internos/externos de entrada e saída de patrimônio das instituições educacionais cadastradas na plataforma.</p>

                    </div>


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

export default Sobre;
