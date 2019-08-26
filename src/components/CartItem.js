import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        var {id,name,quatity,price,image} = this.props;
        return (
            <tr>
                <td><img className="w-60" src={image} alt=""/> </td>
                <td>{name}</td>
                <td>In stock</td>
                <td><input className="form-control" type="text" value={quatity} /></td>
                <td className="text-right">{price} €</td>
                <td className="text-right"><button id={id} className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
            </tr>
        )
    }
}
