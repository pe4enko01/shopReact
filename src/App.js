
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from '../src/pages/homepage'
import ShopPage from '../src/pages/shop/shop'
import Header from '../src/components/header/header';
import {auth, createUserProfileDocument} from './fierbase/fierbase.utils';
import SingInAndSignUpPage from '../src/pages/signup/signup';

class App extends React.Component {
  constructor(){
    super();


    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null; 
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      createUserProfileDocument(user);

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component = {HomePage} />
          <Route exact path="/shop" component = {ShopPage} />
          <Route exact path="/signin" component = {SingInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;


