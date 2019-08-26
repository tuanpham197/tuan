import React, { Component } from 'react'
import CartItem from './CartItem';

export default class Cart extends Component {
    showCart = ()=>{
        return  this.props.cart.map((element,index)=>{
            return <CartItem 
                    key = {index}
                    id = {element.id}
                    name = {element.name}
                    quatity = {element.quatity}
                    image = {element.image}
                    price = {element.price}
            >

            </CartItem>
        })
    }
    
    render() {
        console.log(this.showCart());
        
        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <div className="card text-white bg-primary">
                                <img className="card-img-top" src="holder.js/100px180/" alt=""/>
                                <div className="card-body">
                                <h4 className="card-title">Giỏ hàng</h4>
                                </div>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Available</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showCart()}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Sub-Total</td>
                                        <td className="text-right">255,90 €</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Shipping</td>
                                        <td className="text-right">6,90 €</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total</strong></td>
                                        <td className="text-right"><strong>346,90 €</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6">
                                <button className="btn btn-block btn-light">Continue Shopping</button>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
