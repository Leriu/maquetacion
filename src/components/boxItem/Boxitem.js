import React from 'react'
import './Boxitem.css'

class Boxitem extends React.Component {
    render(){
        return (
            <div className="boxBorder">
                <div className="columns">
                    <div className="column is-2 padd">
                        <p className="margtitle">ACCUVE OASIS</p>
                        <img src={this.props.item.image} alt="Product" />
                    </div>

                    <div className="column is-2 padd">
                        <p className="margtitle"><strong>CANTIDAD</strong></p><br />
                        <div className="select">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="column is-2 padd">
                        <p className="margtitle"><strong>PRECIO UNITARIO</strong></p><br />
                        <p className="margtitle">
                            $ {this.props.item.price}
                        </p>
                    </div>

                    <div className="column is-2 padd">
                        <p className="margtitle"><strong>PRECIO TOTAL</strong></p><br />
                        <p className="margtitle">
                            {this.props.total}
                        </p>
                    </div>

                    <div className="column is-4 btnc">
                        <button className="button is-link centBtn"><strong>VOLVER A COMPRAR</strong></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Boxitem