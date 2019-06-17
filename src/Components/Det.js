import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import {Link} from 'react-router-dom'
import {ButtonContanier} from './Button'
import styled from "styled-components";

class det extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>
                {
               const {id,company,img,info,title,inCart,price} =
                    value.detailProduct
                    return (
                        <div className="contanier py-5 ">
                            <div cllassName="row float-right">
                              <div className="col-10.mx-auto text-center text-slanted text-blue my-5">
                                  <h1 className="display-1">{title}</h1>
                              </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3
                                ">
                                    <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                                <div className="col-10 mx-auto col-md-6 my-2
                                text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 classTitle="text-title text-uppercase text-muted mt-3 mb-2"
                                >
                                    made by: <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4> <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">
                      {title}
                      </p>
                  <span className="mr-1">
                      <h5 className="text-blue font-italic mb-0">$
                      {price}
                          </h5>
                  </span>
                  
                  </div>
                                <h4 className="text-blue">
                                <strong>
                                price: <span>$</span>{price}
                                </strong>
                                </h4>
                                
                                
                                <div >
                                <Link to="/">
                                <ButtonContanier newClass="but">
                                back to products
                                </ButtonContanier>
                                </Link>
                                <span>  </span>
                                <ButtonContanier 
                                    cart    
                                 disabled={inCart?true:false}
                                onClick={
                                    ()=>{
                                        value.addToCart(id)
                                        value.openModal(id)
                                    }
                                }
                                >
                                {inCart ? "inCart" : "add to Cart"}
                                </ButtonContanier>
                                </div>
                                

                                <p className="text-capitalize font-wieght-bold mt-3 mb-0">
                                 some info about device:
                                </p>
                                <p className="text-muted lead">
                                {info}
                                </p>

                                    
                                </div>
                                
                              

                            </div>
                            </div>
                        </div>
                    )
                }
                }
            </ProductConsumer>
        );
    }
}




export default det;