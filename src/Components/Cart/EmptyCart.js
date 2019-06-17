import React, { Component } from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className="container m-5" >
                <div className="col-10 mx-auto text-center text-title">
                    <h2>Your Cart is currently Empty</h2>
                </div>
                
            </div>
        );
    }
}

export default EmptyCart;