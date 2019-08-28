import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Slide from './components/Slide';
import Product from './components/Product';
import Footer from './components/Footer';
import Cart from './components/Cart';

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
    addToCart = (id)=>{
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
            this.setState({
                cart : cart
            })  
        }
        else{    
            if(tmp){
                cart.forEach(element=>{
                    if(element===tmp){                  
                        element.quatity = parseInt(element.quatity)+1;
                    }            
                })
                this.setState({
                    cart
                })
            }
            else{
                item.quatity = 1;
                cart.push(item);
                this.setState({
                    cart : cart
                });  
            }
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
            cart : cart.filter(e => e.id !== id)
        });
    }
    render(){
        
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
                    />

                <Footer />
            </div>
        );
    }
}

export default App;
