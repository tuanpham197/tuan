import React, { Component } from 'react'
import { Link,NavLink} from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">   
                                <li className="nav-item">
                                    <NavLink to="/" exact activeClassName="active" className="nav-link"> 
                                        Trang Chủ
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" >Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link" ><i className="fa fa-shopping-cart"></i>Cart({this.props.totalCart})</Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}
