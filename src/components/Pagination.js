import React, { Component } from 'react'

export default class Pagination extends Component {
    loadNumPage = (size,num)=>{
        var numLink = Math.ceil(size/num);
        var arr = [];
        arr.length = numLink;
          
        arr.map(()=>{
            console.log("aaaaaaa");   
        })
       
    }  
    render() {
         var size = this.props.size;
         var numPage = this.props.num;
        console.log();
        this.loadNumPage(size,numPage);
        return (
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                   
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        )
    }
}
