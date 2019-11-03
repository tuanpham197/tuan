import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        var id = this.props.match.params.id;
        var item = this.props.product.find(x=>x.id == id);
        console.log(item);
        
        console.log();
        
        return (
            <div >
                <div className="row">
                    <div className="col-md-4 item-photo">
                        <img style={{maxWidth: '100%'}} src={item.image} />
                    </div>
                    <div className="col-md-8" style={{border: '0px solid gray'}}>
                        {/* Datos del vendedor y titulo del producto */}
                        <h3>{item.name}</h3>    
                        <h3 style={{marginTop: '0px'}}>U$S {item.price}</h3>
                        {/* Detalles especificos del producto */}            
                        <div>
                            <div className="attr2">16 GB</div>
                            <div className="attr2">32 GB</div>
                        </div>
                        <div className="section" style={{paddingBottom: '20px'}}>
                            <h6 className="title-attr"><small>CANTIDAD</small></h6>                    
                            <div>
                                <div className="btn-minus"><span className="glyphicon glyphicon-minus" /></div>
                                <input defaultValue={1} />
                                <div className="btn-plus"><span className="glyphicon glyphicon-plus" /></div>
                            </div>
                        </div>                
                        {/* Botones de compra */}
                        <div className="section" style={{paddingBottom: '20px'}}>
                            <button className="btn btn-success"><span style={{marginRight: '20px'}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Agregar al carro</button>
                            <h6><a href="#"><span className="glyphicon glyphicon-heart-empty" style={{cursor: 'pointer'}} /> Add to cart</a></h6>
                        </div>      
                    </div>                                      
                </div>
            </div>

        )
    }
}
