import React from 'react'

const whiteText = {
    color: "#ffffff",
    width: "auto",
    margin: ".5rem"
}

const column = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "2rem",
    justifyContent: "end"
}
class Footer extends React.Component {
    render(){
        return <header>
            <main>
                <footer style={{height: "20vh", backgroundColor: "#000000" }}>
                    <div className="columns">
                        <div className="column" style={column}>
                            <a href="/" style={whiteText}>AVISO DE PRIVACIDAD</a>
                            <a href="/" style={whiteText}>TERMINOS Y CONDICIONES</a>
                            <a href="/" style={whiteText}>FAQ</a>
                        </div>

                        <div className="column" style={column}>
                            <p style={whiteText}>COPYRIGHT © 2016. LECO COMERCIO SAPIDE CV</p>
                        </div>
                        <div className="column" style={column}>
                            <p style={whiteText}>COMMON SENSE PEOPLE</p> 
                        </div>

                    </div>
                </footer>
            </main>
        </header>
    }
}

export default Footer