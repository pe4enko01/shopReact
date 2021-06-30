import React from 'react';

import Button from '../button/button';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../card-item/card-item';
import { selectCartHidden, selectCartItems } from '../../redux/card/card.selector';  
import { toggleCartHidden } from '../../redux/card/card.action';


import './card-dropdown.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));