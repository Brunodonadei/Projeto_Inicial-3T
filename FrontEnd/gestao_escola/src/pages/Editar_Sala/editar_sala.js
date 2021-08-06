import { React, Component } from 'react'

import '../../assets/css/editar_sala.css'

import school from '../../assets/img/school.png'
import sala from '../../assets/img/classroom.png'
import axios from 'axios'


class Editar_Sala extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaSalas : [],
            idSalaEscolhida : 0,
            nomeSala : '',
            andarSala : '',
            metragemSala : ''
        }
    }

    buscarSalas = () => {
        axios('http://localhost:5000/api/sala', this.state.idSalaEscolhida, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('projeto-inicial')
            }
        })

        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ listaSalas : resposta.data })
                console.log(this.state.listaSalas)
            }
        })

        .catch(erro => console.log(erro))
    }

    // buscarSalaPorId = (sala) => {
    //     document.getElementById('pop-up').style.display = 'block'
    //     document.getElementById('overlay').style.display = 'block'

    //     this.setState({
    //         idSalaEscolhida : sala.idSala,
    //         nomeSala : sala.nomeSala,
    //         andarSala : sala.andarSala,
    //         metragem : sala.metragemSala
    //     }, () => {
    //         console.log('seu id é: ' + this.state.idSalaEscolhida )
    //     })

       
    // }


    // fecharPopUp = () => {
    //     document.getElementById('pop-up').style.display = 'none'
    //     document.getElementById('overlay').style.display = 'none'
    // }

    componentDidMount(){
        this.buscarSalas()
    }

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

                    <div className="flex-salas">
                        <p className="title-salas">SALAS</p>
                    </div>


                    <tbody className="cards-flex">
                        {
                            this.state.listaSalas.map(evento => {
                                return(
                                    <tr className="editar-sala" key={evento.idSala}>

                                    <img className="img-sala" src={sala} alt="ícone de uma sala" />
                                    <td className="editar-sala-titulo">{evento.nomeSala}</td>
                                    <td className="editar-sala-titulo">{evento.andarSala}° Andar</td>
                                    <td className="editar-sala-titulo">{evento.metragemSala} m²</td>

                                    <button className="opcoes-editar">VER</button>
                                    <button className="opcoes-editar">EDITAR</button>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
 
                    <div id="pop-up" className="pop-up">
                        <button className="modal-header" onClick={this.fecharPopUp}>&times;</button>
                        {
                            this.state.listaSalas.map(evento => {
                                return(
                                    <tr key={evento.idSala}>
                                        <td>{evento.nomeSala}</td>
                                        <td>{evento.andarSala}</td>
                                        <td>{evento.metragemSala}</td>
                                    </tr>
                                )
                            })
                        }
                    </div>
                    <div className="active" id="overlay"></div>
                        {/* <div className="editar-sala">

                            <img className="img-sala" src={sala} alt="ícone de uma sala" />
                            <p className="editar-sala-titulo">SALA X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>

                        <div className="editar-sala">

                            <img className="img-sala" src={sala} alt="ícone de uma sala" />
                            <p className="editar-sala-titulo">SALA X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div>

                        <div className="editar-sala">

                            <img className="img-sala" src={sala} alt="ícone de uma sala" />
                            <p className="editar-sala-titulo">SALA X</p>

                            <p className="opcoes-editar">VER</p>
                            <p className="opcoes-editar">EDITAR</p>

                        </div> */}

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

export default Editar_Sala;
