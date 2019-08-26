import React, { Component } from 'react'

export default class ProductItem extends Component {
    showStar = (numStar)=>{       
        var arr = ['☆','☆','☆','☆','☆']
        return arr.map((element,index)=>{
                return index < numStar ? element='★' : '☆';
            });
    }
    onClick = (event)=>{
        this.props.addToCart(event.target.id);
    }
    render() {
        var {id,name,price,desc,image,star} = this.props;
        
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="/"><img className="card-img-top" src={image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="/">{name}</a>
                        </h4>
                        <h5>{price}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.showStar(star)}</small>
                        <div className="add-cart">
                            <button type="button" id={id} className="btn btn-primary" onClick={this.onClick}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
