
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from '../src/pages/homepage'
import ShopPage from '../src/pages/shop/shop'
import Header from '../src/components/header/header';
import SingInAndSignUpPage from '../src/pages/signup/signup';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component = {HomePage} />
        <Route exact path="/shop" component = {ShopPage} />
        <Route exact path="/singin" component = {SingInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
