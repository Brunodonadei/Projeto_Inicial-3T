import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/localizacao.css'
import school from '../../assets/img/school.png'
import map from '../../assets/img/map.jpeg'



class Localizacao extends Component {


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

                    <div className="local-box">

                        <h1 className="local-title">LOCALIZAÇÃO</h1>

                        <img className="map" src={map} alt="imagem de um mapa com a localização da empresa" />

                        <p className="endereco">Avenida Barão de Limeira, 700</p>

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

export default Localizacao;
