import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import HomePage from '../src/pages/homepage'
import ShopPage from '../src/pages/shop/shop'
import Header from '../src/components/header/header';
import Checkout from './pages/checkout/checkout';

import {auth, createUserProfileDocument} from './fierbase/fierbase.utils';
import SingInAndSignUpPage from '../src/pages/signup/signup-in';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {


  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      if(user){
        let userRef = await createUserProfileDocument(user);
        console.log(createUserProfileDocument(user));

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id:snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state)
        });
      };
      setCurrentUser({user});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component = {HomePage} />
          <Route exact path="/shop" component = {ShopPage} />
          <Route exact path="/checkout" component = {Checkout} />
          <Route exact path="/signin" render={()=>
              this.props.currentUser
                  ?
                  (<Redirect to='/' />)
                  :
                  (<SingInAndSignUpPage/>)}
          />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchProps)(App);


