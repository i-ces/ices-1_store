import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo.svg'
import styled from 'styled-components';
import { ButtonContanier } from './Button.js'

class Navbar extends Component{
    render() {
        return (
  <NavW className="navbar navbar-expand-sm 
  navbar-dark px-sm-5 navbar-dark navbar-fixed-top" >
        <Link to="/" className >
            <img src={Logo} alt="store" className="navbar-brand img-fluid mw-100" />
            </Link>
            
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                    </li>   
                    </ul>

            
            <Link to= "/cart" className="ml-auto" >
                    <ButtonContanier letterSpacing="0.2rem" textAlign="center">  <i class="fas fa-shopping-cart">&nbsp;</i>
                My Cart</ButtonContanier>
                </Link>
                

   



  </NavW>
        );
    }
}

const NavW  = styled.nav`
background: var(--mainGreen);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.9rem;
    text-transform: capitalize !important;
}

`






export default Navbar;