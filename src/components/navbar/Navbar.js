import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import ProfileImage from '../../assets/usuario.png'
import Carrito from '../../assets/carrito.png'

class Navbar extends React.Component {
    
    render(){
        return(
            <div>
            <nav className="navbar" style={{borderBottom: '1px solid rgb(224,224,224)'}} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to='/'>
                    <img alt="" src={Logo} width="112" height="28" />
                    </Link>

                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons" style={{alignItems: "center"}}>
                        <a style={{color: "#797979"}} href="/" className="">
                            <strong>LUCILA MARTINEZ</strong>
                        </a>
                        <a  href="/">
                            <img src={ProfileImage} alt="User" style={{marginTop: ".3rem", marginLeft: "1rem"}} ></img>
                        </a>
                        <a style={{color: "#797979", marginLeft: ".5rem"}} href="/">CARRITO</a>
                        <a  href="/">
                            <img src={Carrito} alt="User" style={{marginTop: ".3rem", marginLeft: "1rem"}} ></img>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        )
    }

}

export default Navbar