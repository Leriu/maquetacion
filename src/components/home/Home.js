import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Graduacion from '../../assets/graduacion.png'
import Ordenes from '../../assets/ordenes.png'
import Items from '../../articles.json'
import Boxitem from '../boxItem/Boxitem'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: Items,
            total: "$ 4,567"
        }
    }

    getItems() {
        let items = []
        for(let i = 0; i < this.state.items.length; i++){
            items.push(
                <Boxitem key={i} item={this.state.items[i]} total={this.state.total} />
            )
        }
        return items
    }

    render(){
        return(
            <div>
                <div className="columns">
                    <div className="column is-three-fifths" style={{height: "100vh"}}>
                        <section className="breadcrumbSection">
                            <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                                <ul>
                                    <li><Link to='/'>HOME</Link></li>
                                    <li><Link to='/'>TU CUENTA</Link></li>
                                    <li><Link to='/'> TUS ORDENES</Link></li>
                                    <li className="is-active"><Link to='/' aria-current="page">DETALLE DE ORDEN</Link></li>
                                </ul>
                            </nav>
                        </section>

                        <section style={{textAlign: "left", margin: ".5rem"}}>
                            <div style={{display: "flex"}}>
                                <img style={{margin: ".5rem"}} src={Ordenes} alt="ordenes"/>
                                <h2 style={{fontSize: "2rem"}}><strong>DETALLE DE ORDEN</strong></h2>
                            </div>
                            <label style={{padding: "1rem"}}>Desde esta pantalla podrás ver el detalle por orden</label>
                        </section>
                        
                        <section style={{margin: ".5rem"}}>
                            <div>
                                <p style={{width: "100%", backgroundColor: "#def5dd", color: "#359035", padding: ".6rem", fontSize: "1.3rem"}}>DETALLE DE ORDEN</p>
                                <p style={{width: "100%", padding: ".6rem", fontSize: "14px"}}><strong>Numero de orden 83975 </strong></p>
                                <table  className="table is-bordered is-fullwidth">
                                <thead>
                                    <tr>
                                        <th>
                                            <strong>No. ORDEN</strong>
                                        </th>
                                        <th>
                                            <strong>FECHA</strong>
                                        </th>
                                        <th>
                                            <strong>TOTAL</strong>
                                        </th>
                                        <th>
                                            <strong>CANTIDAD</strong>
                                        </th>
                                        <th>
                                            <strong>ESTATUS</strong>
                                        </th>
                                        <th>
                                            <strong>ENVIAR A</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            34679
                                        </td>
                                        <td>
                                            20/03/2018
                                        </td>
                                        <td>
                                            $2,350 MXN
                                        </td>
                                        <td>
                                            3
                                        </td>
                                        <td>
                                            Entregado
                                        </td>
                                        <td>
                                            Lucila Susana Martinez Reyes
                                        </td>
                                    </tr>
                                </tbody>


                                </table>
                            </div>
                        </section>

                        <section>
                            {this.getItems()}
                        </section>

                    </div>

                    <div className="column" style={{backgroundColor: "#f0eaea"}}>
                        <section className="historySection">
                            <div style={{padding: "1rem"}}>
                                <p>HISTORIAL CLINICO</p>
                            </div>
                            
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img style={{margin: ".5rem"}} src={Graduacion} alt="graduacion"/>
                                <h2 style={{fontSize: "1rem", padding: "1rem"}}><strong>TU GRADUACION</strong></h2>
                            </div>

                            <div>
                                <p><strong>GRADUCAION OJO DERECHO</strong></p>
                                <div className="columns">
                                    <div className="column is-2">
                                        <label>ESFERA</label>
                                        <input value="-0.05" type="text" className="input"></input>
                                    </div>
                                    <div className="column is-2 is-offset-2 ">
                                        <label>CILINDRO</label>
                                        <input value="-0.05" type="text" className="input"></input>
                                    </div>
                                    <div className="column is-2 is-offset-2">
                                        <label>EJE</label>
                                        <input value="-0.05" type="text" className="input"></input>
                                    </div>

                                </div>
                                <p><strong>GRADUCAION OJO IZQUIERDO</strong></p>
                                <div className="columns">
                                    <div className="column is-2">
                                        <label>ESFERA</label>
                                        <input value="-0.05" type="text" className="input"></input>
                                    </div>
                                    <div className="column is-2 is-offset-2 ">
                                        <label>CILINDRO</label>
                                        <input value="-0.05" type="text" className="input"></input>
                                    </div>
                                    <div className="column is-2 is-offset-2">
                                        <label>EJE</label>
                                        <input value="-0.05" type="text" className="input"></input>
                                    </div>
                                </div>
                                
                                <div className="columns">
                                    <div className="column">
                                        <p><strong>OPTOMETRISTA</strong></p>
                                        <p>Daniel Zavala</p>
                                    </div>
                                    <div className="column">
                                        <p><strong>FECHA</strong></p>
                                        <p>23/03/2018</p>
                                    </div>

                                </div>
                            </div>

                        </section>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Home