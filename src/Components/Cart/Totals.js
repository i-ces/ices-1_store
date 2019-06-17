import React from 'react'
import { Link } from 'react-router-dom'

export default function Totals({value}){
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value
    return(

        <React.Fragment>
       
            <div className="container float-right">
                <div className="row">
                    <div className="col-10 mt-2  ml-sm-5 md-auto 
                    col-sm-8 text-capitalize text-right">

                            <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5 color-solid"
                            type="button"
                            onClick={()=> clearCart() }
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5 className="text-title">
                            subtotal :
                            <span>
                                <strong>
                                    $ {cartSubTotal}</strong></span></h5>

                                    <h5 className="text-title">
                            tax :
                            <span>
                                <strong>
                                    $ {cartTax}</strong></span></h5>

                                    <h5 className="text-title">
                            total :
                            <span>
                                <strong>
                                    $ {cartTotal}</strong></span></h5>


                    </div>
                    </div>
                    </div>
        </React.Fragment>

        
    )

}