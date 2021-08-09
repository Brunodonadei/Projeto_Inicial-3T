import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/privacidade.css'
import school from '../../assets/img/school.png'



class Privacidade extends Component {


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

                    <div className="privacidade-box">

                        <h1 className="privacidade-title">PRIVACIDADE</h1>

                        <p className="privacidade-text">Por força da Lei nº 13.709/18, a Lei Geral de Proteção de Dados ou LGPD, o uso de todos os dados pessoais e dados pessoais sensíveis inseridos nesta plataforma serão tratados somente pelos responsáveis, e com acesso restrito a qualquer outro colaborador Gestão Escola. A finalidade única da captura e armazenamento desses dados é a de gestão de patrimônios escolares. Não há compartilhamento com terceiros e todos os dados considerados desnecessários serão excluídos.</p>

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

export default Privacidade;
