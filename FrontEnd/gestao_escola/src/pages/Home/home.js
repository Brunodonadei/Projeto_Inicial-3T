import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'
import school from '../../assets/img/school.png'
import sala from '../../assets/img/classroom.png'
import pc from '../../assets/img/computer.png'


class Home extends Component {


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

                    <div className="gerencie-flex">
                        <p className="gerencie-titulo">GERENCIE O PATRIMÔNIO DE SUA ESCOLA COM A PLATAFORMA GESTÃO ESCOLA</p>
                    </div>

                    <div className="cards-flex">

                        <div className="cadastro-sala">
                            <Link className="link-cadastro" to="/cadS">
                                <img className="img-sala-home" src={sala} alt="ícone de uma sala" />
                                <p className="cadastro-sala-titulo">CADASTRE UMA SALA</p>
                            </Link>
                        </div>

                        <div className="cadastro-equip">
                            <Link className="link-cadastro" to="/cadE">
                                <img className="img-equip" src={pc} alt="ícone de um computador" />
                                <p className="cadastro-equip-titulo">CADASTRE UM EQUIPAMENTO</p>
                            </Link>
                        </div>

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

export default Home;
