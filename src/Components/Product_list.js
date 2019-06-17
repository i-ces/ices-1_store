import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context'

class Product_list extends Component {

   
    render() {
         return (
            <React.Fragment>
                <div className="py-5">
                    <div className="contanier">
                        <Title name="our" title="products" />
                    <div className="row">
                        <ProductConsumer>
                            {(hello)=>{
                                return hello.products.map( product =>
                                    {
                                  return <Product product={product} key={product.id}></Product>  
                                    } 
                                )
                            

                            }
                        }
                                </ProductConsumer>
                    </div>
                </div>
            </div>


            </React.Fragment>
            // <div>
            //     <Product />    
            // </div>
        );
    }
}

export default Product_list;