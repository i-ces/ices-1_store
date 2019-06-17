import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';


class Product extends Component {
    render() {
        const {id, title, img ,props, inCart,price} = this.props.product
        return (
            <ProductWrapper className="col-9 max auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <ProductConsumer>
                   
                   <div className="img-container p-5"
                   onClick={()=>
                   console.log("you-clicked-me")}>
                    <Link to="/details">
                    <img src={img} alt="product"
                        className="card-img-top">
                        </img>
                        </Link>
                    <button className="cart-btn" disabled
                    ={inCart?true:false}
                    onClick={()=>{console.log("Added to chart")}}
                        >
                         {inCart?(<p calssName="text-capitalize mb-0"
                        disabled={inCart?true:false}>in cart</p>):
                        (<i className="fas fa-cart-plus"></i>)}
                        </button>

                   </div>
                   
                  <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">
                      {title}
                      </p>
                  <span className="mr-1">
                      <h5 className="text-blue font-italic mb-0">$
                      {price}
                          </h5>
                  </span>
                  
                  </div>
               
                </ProductConsumer>
                </div>
            </ProductWrapper>

        );
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
        

    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.5s linear;
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.5s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247); 
    }
        }
.img-container {
    overflow: hidden;
    position: relative;

}
.card-img-top{
    transtion:all 1s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
    transition:all 0.5s linear;
}

.cart-btn{
    position: absolute;
    bottom:0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightGreen);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    bottomradius: 0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition:all 0.5s linear; 
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
    
}
.cart-btn:hover{
    color:var(--mainGreen);
    cursor: pointer;

}

`

export default Product;
