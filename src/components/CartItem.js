import React, { Component } from 'react'

export default class CartItem extends Component {
    onChange =  (event)=>{
        this.props.onUpdateQuatity(this.props.id,event.target.value);
        
    }

    render() {
        var {id,name,quatity,price,image} = this.props;
        return (
            <tr>
                <td><img className="w-60" src={image} alt=""/> </td>
                <td>{name}</td>
                <td>In stock</td>
                <td><input className="form-control" type="number" value={quatity} onChange={this.onChange}/></td>
                <td className="text-right">{price*quatity} €</td>
                <td className="text-right"><button id={id} className="btn btn-sm btn-danger" onClick={()=>this.props.deleteItem(id)}><i className="fa fa-trash"></i> </button> </td>
            </tr>
        )
    }
}
