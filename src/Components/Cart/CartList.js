import React, { Component } from 'react';
import CartItem  from './CartItem'
import { ProductConsumer } from "../../context"

export default function CartList({value}) {
    

    const { cart } = value  
           
   
        return (
            <div className="contanier-fluid">
                {cart.map(item =>
                {return(
                    <CartItem key={item.id}
                    item={item} 
                    value={value} />
                )

                })}
                
                    
            </div>
        );
    }

