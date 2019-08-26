import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Slide from './components/Slide';
import Product from './components/Product';

class  App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            listDT : [
                {
                    name  : 'RedMi Note 5 Pro',
                    price : 700,
                    desc : 'Điện thoại Trung Quốc',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-1-400x400.jpg',
                    star : 4,
                    category : 'xiaomi'
                },
                {
                    name  : 'Iphone 6s',
                    price : 900,
                    desc : 'Điện thoại',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-400x400.jpg',
                    star : 2,
                    category : 'iphone'
                },
                {
                    name  : 'Samsung Galaxy s9',
                    price : 400,
                    desc : 'Điện thoại',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/192003/samsung-galaxy-a9-2018-blue-400x400.jpg',
                    star : 5,
                    category : 'samsung'
                },
                {
                    name  : 'Iphone XsMax',
                    price : 600,
                    desc : 'Điện thoại',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/197570/huawei-y7-pro-2019-do-400x400.jpg',
                    star : 4,
                    category : 'iphone'
                },
            ],
            imgSlide : [
                'https://cdn.tgdd.vn/2019/08/banner/800-300-800x300-(6).png',
                'https://cdn.tgdd.vn/2019/08/banner/Oppo-K3-800-300-800x300-(7).png',
                'https://cdn.tgdd.vn/2019/08/banner/800-300-800x300-(5).png'
            ],
            category : [
                {
                    id : 'xiaomi',
                    name : 'XiaoMI'
                },
                {
                    id:'iphone',
                    name : 'Iphone'
                },
                {
                    id:'samsung',
                    name : 'SamSung'
                }
            ],
            cart : [],
            result : []
        }
    }
    showProductByCategory = (id)=>{
        var arrProuct = this.state.listDT;
        var  result = [];       
        arrProuct.forEach(element => {
            if(element.category === id){
                result.push(element)
            }
        });
        if(result.length>0){
            this.setState({
                result : result
            });
        }
    }
    render(){
        console.log(this.state.result);
        
        return (
            <div id="wrapper">
                {/* Navigation */}
                <Header />
                {/* Page Content */}
                <div className="container">
                    <div className="row">
                        <SideBar 
                            category ={this.state.category}
                            showProductByCategory = {this.showProductByCategory}
                        />
                        {/* /.col-lg-3 */}
    
                        {/* /.col-lg-9 */}
                        <div className="col-lg-9">
                            <Slide imageSlide = {this.state.imgSlide}/>
                            <Product 
                                product = {this.state.result.length > 0 ?this.state.result :this.state.listDT} 
                            />
                            {/* /.row */}
                        </div>
                    {/* /.col-lg-9 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
                {/* Footer */}
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
                                        <tr>
                                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                            <td>Product Name Dada</td>
                                            <td>In stock</td>
                                            <td><input className="form-control" type="text" value="1" /></td>
                                            <td className="text-right">124,90 €</td>
                                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                            <td>Product Name Toto</td>
                                            <td>In stock</td>
                                            <td><input className="form-control" type="text" value="1" /></td>
                                            <td className="text-right">33,90 €</td>
                                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                            <td>Product Name Titi</td>
                                            <td>In stock</td>
                                            <td><input className="form-control" type="text" value="1" /></td>
                                            <td className="text-right">70,00 €</td>
                                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                        </tr>
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

                <footer className="py-5 bg-dark">
                    <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Your Website 2019</p>
                    </div>
                    {/* /.container */}
                </footer>
            </div>
        );
    }
}

export default App;
