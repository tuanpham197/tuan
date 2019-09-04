import React, { Component } from 'react'
import { Link} from 'react-router-dom';



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
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link" >
                                        Trang Chủ
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" >Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}
