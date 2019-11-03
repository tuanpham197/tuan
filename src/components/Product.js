import React, { Component } from 'react'
import ProductItem from './ProductItem';
import { BrowserRouter as Router, Route,Switch  } from 'react-router-dom';
import Detail from './Detail';

export default class Product extends Component {
    loadDataItem = (arrProduct)=>{
        return arrProduct.map((element,index)=>{         
            return <ProductItem 
                        key ={index}
                        id = {element.id}
                        name={element.name}
                        desc = {element.desc}
                        price = {element.price}
                        image = {element.image}
                        star = {element.star}
                        addToCart = {this.props.addToCart}
                    />
        })
    }
    render() {
        var {product} = this.props;
        return (
            <div>
                 <div className="row">
                    {this.loadDataItem(product)}
                </div>
            </div>    
        )
    }
}
