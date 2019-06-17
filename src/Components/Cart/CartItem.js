import React, { Component } from 'react';
import { ProductConsumer } from "../../context"

export default class CartItem extends Component {
    render(){
    const {id,title,img,price,total,count} = this.props.item   
    const { increment , decrement , removeItem } = this.props.value
    

        return (
            <div className="row my-3 text-caitalize text-center">
                <div className="col-10 mx-auto col-lg-2 ">
                <img src={img} style={{width:"5rem",height:"5rem"}}
                className="img-fluid" alt="product" />
                </div>
                
                
                
                <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">product:</span>
               {title}
                </div>

                <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">product:</span>
               {price}
                </div>
               
                

                <div className="col-10 mx-auto col-lg-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick=
                            { ()=> decrement(id) }>
                               -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick=
                            { ()=> increment(id) }>
                               +
                        </span>
                        </div>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon">
                   <i className="fas fa-trash" 
                   onClick=
                   {()=> removeItem(id) }
                   ></i> 
                    </div>           
                </div>
               
                

                <div className="col-10 mx-auto col-lg-2">
               <strong>item total : ${total}</strong>
               
                </div>
               

               

                
            </div>
        )
    }
}



