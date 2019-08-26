import React, { Component } from 'react'

export default class SideBar extends Component {

    onClick = (event)=>{
        event.preventDefault();
        // current Target get element when click
        this.props.showProductByCategory(event.currentTarget.id)
    }
    showCategory = (arrCategory)=>{
        return arrCategory.map((element,index)=>{
            return <a 
                        href="/" 
                        className="list-group-item"
                        id={element.id} 
                        key={index}
                        onClick={this.onClick}
                    >
                        {element.name}
                    </a>;
        })
    }
    render() {
        var {category} = this.props;
        return (
            <div className="col-lg-3">
                <h1 className="my-4">Shop Name</h1>
                <div className="list-group">
                    {this.showCategory(category)}
                </div>
            </div>
        )
    }
}
