import React ,{ Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Product_list from './Components/Product_list'
import Det from './Components/Det'
import Default from './Components//Default'
import Cart from './Components/Cart/Cart'
import Product from './Components/Product';
import Modal from './Components/Modal'

function App() {
  return (
    <div className="App">
     <React.Fragment>

      <Navbar />
      <Switch>
        <Route exact path="/" component={Product_list} />
        <Route path="/details" component={Det} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
       

      </Switch>
      <Modal />
     </React.Fragment>
     </div>

  )}

export default App;
