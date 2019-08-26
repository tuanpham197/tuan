import React, { Component } from 'react'

export default class Slide extends Component {
    loadImageSlide = (arrImage)=>{
        return arrImage.map((element,index)=>{
            return <div className={index===0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                        <img className="d-block img-fluid" src={element} alt="First slide" />
                    </div>
        }); 
    }
    render() {
        var {imageSlide} = this.props;
        return ( 
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                
                <div className="carousel-inner" role="listbox">
                    {this.loadImageSlide(imageSlide)}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
