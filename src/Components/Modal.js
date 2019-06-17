import React, { Component } from 'react';
import styled from 'styled-components'
import {ProductConsumer} from "../context"
import { ButtonContanier } from './Button'
import {Link} from "react-router-dom"

class Modal extends Component {
    render() {
        return (
            
                <ProductConsumer>
                    {(value)=>
                    {
                        const {modalOpen,closeModal} = value
                        const {img,title,price} = value.modalProduct;

                        if(!modalOpen){
                            return null
                        }
                        else{
                           return(

                            <ModalContainer>
                                <div  className="contanier">
                                    <div className="row-12 row-auto row-md-10 row-lg-6 
                                    text-center text-capitalize p-5">
                                    <div id="modal" className="col-12 mx-auto col-md-10 col-lg-8 
                                    text-center text-capitalize p-5 ">
                                    <h5>Item added to the cart</h5>
                                    <img src={img} className="img-fluid"
                                    alt="product" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price : ${price}
                                    </h5>
                                    <div>
                                    <Link to="/">
                                        <ButtonContanier
                                        onClick={() => {
                                            closeModal()
                                        }}
                                        >Store
                                        </ButtonContanier>
                                    </Link>
                                    <span>  </span>

                                    <Link to="/cart">
                                        <ButtonContanier cart
                                        onClick={() => {
                                            closeModal()
                                        }}
                                        >
                                            Go to cart
                                        </ButtonContanier>
                                    </Link>
                                    </div>
                                    </div>
                                    


                                    </div>
                                    </div>    

                            </ModalContainer>
                           ) 
                        }
                    }}
                </ProductConsumer>
          
        );
    }
} 
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content: center;
#modal{
    background: var(--mainWhite)
}

`

export default Modal;