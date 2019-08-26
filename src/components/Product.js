import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Product extends Component {
    loadDataItem = (arrProduct)=>{
        return arrProduct.map((element,index)=>{
            return <ProductItem 
                        key ={index}
                        name={element.name}
                        desc = {element.desc}
                        price = {element.price}
                        image = {element.image}
                        star = {element.star}
                    />
        })
    }
    render() {
        var {product} = this.props;
        return (
            <div className="row">
                {this.loadDataItem(product)}
            </div>
        )
    }
}
