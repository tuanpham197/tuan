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
                        id={element.id} 
                        //className="list-group-item"
                        key={index}
                        onClick={this.onClick}
                        className={this.props.fill === element.id? 'list-group-item active':'list-group-item '}
                    >
                        {element.name}
                    </a>;
        })
    }
    render() {
        var {category} = this.props;
        //console.log("aa",fill);
        
        return (
            <div className="col-lg-3">
                <h1 className="my-4">Shop Name</h1>
                <div className="list-group">
                    <a href="/" 
                        id="" 
                        onClick={this.onClick}
                        className={this.props.fill ?'list-group-item':'list-group-item active'}
                    >
                        Trang chủ
                    </a>
                    {this.showCategory(category)}
                </div>
            </div>
        )
    }
}
