import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Slide from './components/Slide';
import Product from './components/Product';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Success from './components/Success';
import about from './components/about';
import contact from './components/contact';
import {BrowserRouter as Router,Route} from "react-router-dom";

class  App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            listDT : [
                {
                    id : 1,
                    name  : 'RedMi Note 5 Pro',
                    price : 700,
                    desc : 'Điện thoại Trung Quốc',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-1-400x400.jpg',
                    star : 4,
                    category : 'xiaomi'
                },
                {
                    id : 2,
                    name  : 'Iphone 6s',
                    price : 900,
                    desc : 'Điện thoại',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-400x400.jpg',
                    star : 2,
                    category : 'iphone'
                },
                {
                    id : 3,
                    name  : 'Samsung Galaxy s9',
                    price : 400,
                    desc : 'Điện thoại',
                    image : 'https://cdn.tgdd.vn/Products/Images/42/192003/samsung-galaxy-a9-2018-blue-400x400.jpg',
                    star : 5,
                    category : 'samsung'
                },
                {
                    id : 4,
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
            result : [],
            isShowSuccess : false,
            status : '',
            content : '',
            fill :''
        }
    }
    showProductByCategory = (id)=>{
        //console.log(id + "a");
        
        var arrProuct = this.state.listDT;
        var  result = [];       
        arrProuct.forEach(element => {
            if(element.category === id){
                result.push(element)
            }
        });
        if(result.length>0){
            this.setState({
                result : result,
                fill : id
            });
        }else{
            this.setState({
                result : this.state.listDT,
                fill : id
            });
        }
        //console.log(result);
        
    }
    addToCart = (id)=>{
        var  t= 1;
        var arrProduct = this.state.listDT;
        var item =  arrProduct.find(element=>{
            return element.id === parseInt(id);
        });
        var cart = this.state.cart;
        var tmp = cart.find(element=>{
            return element.id === parseInt(id);
        });
        if(this.state.cart.length === 0){
            
            item.quatity = 1;
            cart.push(item);          
            t=1;
            this.setState({
                cart : cart,
                isShowSuccess : true,
                status : 'alert alert-success',
                content : 'Thêm thành công.'
            })  
            
        }
        else{    
            if(tmp){
                t = 1;
                cart.forEach(element=>{
                    if(element===tmp){                  
                        element.quatity = parseInt(element.quatity)+1;
                    }            
                })
                this.setState({
                    cart,
                    isShowSuccess : true,
                    status : 'alert alert-success',
                    content : 'Thêm thành công.'

                })
            }
            else{
                item.quatity = 1;t=1;
                cart.push(item);
                this.setState({
                    cart : cart,
                    isShowSuccess : true,
                    status : 'alert alert-success',
                    content : 'Thêm thành công.'
                });  
            }
        }  
        if(t===1){
            t=0;    
            setTimeout(()=>{
                this.setState({
                    isShowSuccess : false,
                })
            },3000);
        }
        
    }
    updateQuatity = (id,quatity)=>{
        var {cart} = this.state;
        cart.forEach(element=>{
            if(element.id === id){
                element.quatity = +quatity
            }
        });
        this.setState({
            cart
        })
    }
    deleteItemCart = (id)=>{
        var {cart} = this.state;
        
        this.setState({
            cart : cart.filter(e => e.id !== id),
            isShowSuccess : true,
            status : 'alert alert-danger',
            content : 'Xóa thành công.'
        });
        setTimeout(()=>{
            this.setState({
                isShowSuccess : false
            })
        },3000);
    }
    checkoutCart = ()=>{
        this.setState({
            cart : [],
            isShowSuccess : true,
            status : 'alert alert-success',
            content : 'Checkout Thành công'
        });
        setTimeout(()=>{
            this.setState({
                isShowSuccess:false
            })
        },2000);
        
    }
    render(){
        var {isShowSuccess,status,content} = this.state;
        return (
            <Router>
                <div id="wrapper">
                    {/* Navigation */}
                    <Header />
                    {isShowSuccess === true ? <Success status ={status} content={content}></Success> : ''}
                    {/* Page Content */}
                    {/* Hien thi thong tin thay doi tai day */}
                    <Route path="/about" component={about}></Route>
                    <Route path="/contact" component={contact}></Route>
                    <div className="container">
                        <div className="row">
                            <SideBar 
                                category ={this.state.category}
                                showProductByCategory = {this.showProductByCategory}
                                fill = {this.state.fill}
                            />
                            {/* /.col-lg-3 */}
        
                            {/* /.col-lg-9 */}
                            <div className="col-lg-9">
                                <Slide imageSlide = {this.state.imgSlide}/>
                                <Product 
                                    product = {this.state.result.length > 0 ?this.state.result :this.state.listDT}
                                    addToCart = {this.addToCart} 
                                />
                                {/* /.row */}
                            </div>
                        {/* /.col-lg-9 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                    {/* Footer */}
                    <Cart 
                        cart = {this.state.cart}
                        onUpdateQuatity = {this.updateQuatity}
                        deleteItem = {this.deleteItemCart}
                        checkoutCart = {this.checkoutCart}
                        />

                    <Footer />
                </div>
            </Router>   
        );
    }
}

export default App;
